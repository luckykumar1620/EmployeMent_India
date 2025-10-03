import jwt from 'jsonwebtoken'

const authWorker=async (req,res,next)=>{
    try {
        
        const {wtoken}=req.headers
        if(!wtoken){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode=jwt.verify(wtoken,process.env.JWT_SECRET)

       req.workId=token_decode.id


        next();

    } catch (error) {
       console.log(error);
       res.json({success:false,message:error.message})   
    }
}


export default authWorker