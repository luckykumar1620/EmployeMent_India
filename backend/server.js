import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import { addWorker } from './controllers/adminController.js';
import adminRouter from './routes/adminRoute.js';
import workerRouter from './routes/workerRoute.js';
import userRouter from './routes/userRoute.js';

//app config
const app =express();
const port=process.env.PORT || 5000
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//API endpoints
app.use('/api/admin',adminRouter)
app.use('/api/worker',workerRouter)
app.use('/api/user',userRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING");
});

app.listen(port,()=>console.log("Server Started",port));