import { meta } from "@eslint/js";
import { createContext,useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [workers,setWorkers]=useState([])
    const [services,setServices]=useState([])
    const [dashData,setDashData]=useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllWorkers=async(req,res)=>{
        
        try {
             const {data}=await axios.post(backendUrl + '/api/admin/all-workers',{},{headers:{aToken}})
             
             if(data.success){
                setWorkers(data.workers)
                console.log(data.workers)
             }else{
                toast.error(data.message)
             }

        } catch (error) {
            toast.error(error.message)
        }
       
    }

     const changeAvailability=async(workerId)=>{

        try {

            const {data}=await axios.post(backendUrl + '/api/admin/change-availability',{workerId},{headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAllWorkers()
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllServices=async()=>{
        try {
           
            const {data}=await axios.get(backendUrl+'/api/admin/services',{headers:{aToken}})
            
            if (data.success) {
                setServices(data.services)
                console.log(data.services)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
             toast.error(error.message)
        }
    }
    
     const cancelService=async(serviceId)=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/admin/cancel-service',{serviceId},{headers:{aToken}})

            if(data.success){
                toast.success(data.message)
                getAllServices()
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

        const getDashData=async()=>{
        try {

            const {data}=await axios.get(backendUrl+'/api/admin/dashboard',{headers:{aToken}})

            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
             toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl,workers,
        getAllWorkers,changeAvailability,
        services,setServices,
        getAllServices,cancelService,
        dashData,getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider