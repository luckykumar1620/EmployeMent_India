import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { WorkerContext } from '../context/WorkerContext'

const Navbar = () => {

    const {aToken,setAToken}=useContext(AdminContext)

    const {wToken,setWToken}=useContext(WorkerContext)

    const navigate=useNavigate()

    const logout=()=>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        wToken && setWToken('')
        wToken && localStorage.removeItem('wToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center text-xs gap-2'>
        <img className='w-6 h-10 sm:w-16 cursor-pointer' src={assets.admin_logo} alt=""  />
        <span className='text-lg font-medium text-blue-500'>Employment India</span>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin':'Worker'}</p>
      </div>
      <button onClick={logout} className='bg-blue-500 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
