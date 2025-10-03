import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { WorkerContext } from '../context/WorkerContext'

const Sidebar = () => {

    const {aToken}=useContext(AdminContext)
    const {wToken}=useContext(WorkerContext)


  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5'>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>DashBoard</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/all-services'}>
            <img src={assets.service_icon} alt="" />
            <p>Services</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/add-worker'}>
            <img src={assets.add_icon} alt="" />
            <p>Add Worker</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/worker-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Worker List</p>
          </NavLink>



        </ul>
      }
      {
        wToken && <ul className='text-[#515151] mt-5'>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/worker-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>DashBoard</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/worker-services'}>
            <img src={assets.service_icon} alt="" />
            <p>Services</p>
          </NavLink>


          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2f3Ff] border-r-4 border-blue-500':''}`} to={'/worker-profile'}>
            <img src={assets.people_icon} alt="" />
            <p>Profile</p>
          </NavLink>



        </ul>
      }
    </div>
  )
}

export default Sidebar
