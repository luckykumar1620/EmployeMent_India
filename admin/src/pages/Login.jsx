import React, { useContext, useState,useEffect } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { WorkerContext } from '../context/WorkerContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [state,setState]=useState('Admin')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


   const {setAToken,backendUrl}=useContext(AdminContext);
   const {setWToken}=useContext(WorkerContext)

   const navigate=useNavigate()

   
      useEffect(() => {
    const storedDToken = localStorage.getItem('wToken')
    if (storedDToken) {
      setWToken(storedDToken)
      navigate('/worker-dashboard')
    }

    const storedAToken = localStorage.getItem('aToken')
    if (storedAToken) {
      setAToken(storedAToken)
      navigate('/admin-dashboard')
    }
  }, [])

    const onSubmitHandler=async(event)=>{

        event.preventDefault()

       try {
        
          if (state==='Admin') {
            
           const {data}=await axios.post(backendUrl + '/api/admin/login',{email,password})
           if(data.success){
            localStorage.setItem('aToken',data.token)
             setAToken(data.token)
             navigate('/admin-dashboard')
             
           }else{
             toast.error(data.message)
           }

          }else{

              const {data}=await axios.post(backendUrl+'/api/worker/login',{email,password})
             if(data.success){
            localStorage.setItem('wToken',data.token)
             setWToken(data.token)
             console.log(data.token)
             navigate('/worker-dashboard')

           }else{
             toast.error(data.message)
           }

          }


       } catch (error) {
        
       }

    }



  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center border border-black/10'>
     <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-black/10 rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
      <p className='text-2xl font-semibold m-auto'><span className='text-blue-500'>{state}</span> Login</p>
      <div className='w-full'>
        <p>Email</p>
        <input onChange={(e)=>(setEmail(e.target.value))} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required/>
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input onChange={(e)=>(setPassword(e.target.value))} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required/>
      </div>
      <button className='bg-blue-500 text-white w-full py-2 rounded-md text-base'>Login</button>
      {
        state==='Admin'
        ?<p>Worker Login?<span className='text-blue-500 underline cursor-pointer' onClick={()=>setState('Worker')}>Click here</span></p>
        :<p>Admin Login?<span className='text-blue-500 underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span></p>
      }
     </div>
    </form>
  )
}

export default Login
