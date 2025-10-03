import mongoose from "mongoose";

const serviceSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    workId:{type:String,required:true},
    slotDate:{type:String,required:true},
    slotTime:{type:String,required:true},
    userData:{type:Object,required:true},
    workData:{type:Object,required:true},
    amount:{type:Number,required:true},
    date:{type:Number,required:true},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    isCompleted:{type:Boolean,default:false}
})

const serviceModel=mongoose.models.service || mongoose.model('service',serviceSchema)

export default serviceModel