import express from 'express'
import { addWorker,adminDashboard,allWorkers,loginAdmin, serviceCancel, servicesAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailablity } from '../controllers/workerController.js';


const adminRouter=express.Router();

adminRouter.post('/add-worker',authAdmin,upload.single('image'),addWorker);
adminRouter.post('/login',loginAdmin);
adminRouter.post('/all-workers',authAdmin,allWorkers);
adminRouter.post('/change-availability',authAdmin,changeAvailablity);
adminRouter.get('/services',authAdmin,servicesAdmin)
adminRouter.post('/cancel-service',authAdmin,serviceCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

export default adminRouter