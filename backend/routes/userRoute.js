import express from 'express'
import { bookService, cancelService, getProfile, listService, loginUser, paymentRazorpay, registerUser ,updateProfile, verifyRazorpay} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single("image"),authUser,updateProfile)
userRouter.post('/book-service',authUser,bookService)
userRouter.get('/services',authUser,listService)
userRouter.post('/cancel-service',authUser,cancelService)
userRouter.post('/payment-razorpay',authUser,paymentRazorpay)
userRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default userRouter