import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import workerModel from '../models/workerModel.js';
import serviceModel from '../models/serviceModel.js';
import razorpay from 'razorpay'

//API to register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: "missing Details" });
        }

        //validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid emails" });
        }

        //validate password
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" });
        }

        //hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedpassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

//API for user login
const loginUser=async (req,res)=>{

    try {

        const {email,password}=req.body

        const user=await userModel.findOne({email})

        if(!user){
            return res.json({success:false,message:"User does not exist"})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(isMatch){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:'Invalid Credentials'})
        }
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }
}

//API to get user profile data
const getProfile=async(req,res)=>{

    try {
        
      const userId=req.userId
      
      const userData=await userModel.findById(userId).select('-password')

      res.json({success:true,userData})

    } catch (error) {
         console.log(error)
        res.json({ success: false, message: error.message })
        
    }
}


//API to update user profile
const updateProfile=async (req,res)=>{
    try {

        const {name,phone,address,dob,gender}=req.body
        const userId=req.userId
        const imageFile=req.file

        if(!name || !phone || !dob || !gender){
            return res.json({ success: false, message: "Data Missing" })
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

        if(imageFile){

            //upload image to cloudinary
            const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageUrl=imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageUrl})
        }

        res.json({success:true,message:'Profile Updated'})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API to book service
const bookService=async(req,res)=>{
    try {

        const userId=req.userId;
        const {workId,slotDate,slotTime}=req.body

        const workData=await workerModel.findById(workId).select('-password')

        if(!workData.available){
            return res.json({success:false,message:"worker Not Available"})
        }

        let slots_booked=workData.slots_booked

        //checking for slots availability
        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
             return res.json({success:false,message:"Slot Not Available"}) 
            }else{
                slots_booked[slotDate].push(slotTime)
            }
        }else{
            slots_booked[slotDate]=[]
            slots_booked[slotDate].push(slotTime)
        }

        const userData=await userModel.findById(userId).select('-password')

        delete workData.slots_booked

        const serviceData={
            userId,
            workId,
            userData,
            workData,
            amount:workData.fees,
            slotDate,
            slotTime,
            date:Date.now()
        }

        const newService=new serviceModel(serviceData)
        await newService.save()

        //save new slots data in workdata

        await workerModel.findByIdAndUpdate(workId,{slots_booked})

        res.json({success:true,message:"Service Booked"})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API to get user services for frontend my-services page
const listService = async (req, res) => {
    try {

        const userId = req.userId

        const services = await serviceModel.find({ userId })

        res.json({ success: true, services })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

//API to cancel service
const cancelService=async(req,res)=>{
    try {

        const userId=req.userId
        const {serviceId}=req.body

        const serviceData=await serviceModel.findById(serviceId)

        //Verify appointment user
        if(serviceData.userId.toString() !== userId){
            return res.json({success:false,message:"Unauthorized Action"})
        }

        await serviceModel.findByIdAndUpdate(serviceId,{cancelled:true})

        //releasing doctor slot
        const {workId,slotDate,slotTime}=serviceData

        const workerData=await workerModel.findById(workId)

        let slots_booked=workerData.slots_booked

        slots_booked[slotDate]=slots_booked[slotDate].filter(e=>e !==slotTime)

        await workerModel.findByIdAndUpdate(workId,{slots_booked})

        res.json({success:true,message:'Service Cancelled'})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const razorpayInstance=new razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_SECRET_ID
})

//API to make payment of service using razorpay

const paymentRazorpay=async(req,res)=>{
    try {

         const {serviceId}=req.body
    const serviceData=await serviceModel.findById(serviceId)

    if(!serviceData || serviceData.cancelled){
        return res.json({success:false,message:"Service Cancelled Or Not Found"})
    }
    //creating option for razorpay payment
    const options={
        amount:serviceData.amount*100,
        currency:process.env.CURRENCY,
        receipt:serviceId
    }

    //creation of an order
    const order=await razorpayInstance.orders.create(options)

    res.json({success:true,order})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }
   

}
//API to verify a payment of razorpay
    const verifyRazorpay=async(req,res)=>{
        try {

            const {razorpay_order_id}=req.body
            const orderInfo=await razorpayInstance.orders.fetch(razorpay_order_id)

            if(orderInfo.status ==='paid'){
                await serviceModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
                res.json({success:true,message:"Payment Successfull"})
            }else{
                 res.json({success:true,message:"Payment Failed"})
            }
            
        } catch (error) {
           console.log(error)
           res.json({ success: false, message: error.message })
        }
    }


export {registerUser,loginUser,getProfile,updateProfile,bookService,listService,cancelService,paymentRazorpay,verifyRazorpay}