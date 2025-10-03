import React, { useState,useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
const Navbar = () => {


  const navigate = useNavigate();
  const [showMenu, setShowmenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
 

  const {token,setToken,userData}=useContext(AppContext);

   const logout=()=>{
    setToken(false)
    localStorage.removeItem('token')
   }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400 '>
      {/* <img className='w-20 cursor-pointer' src={assets.logo} alt="" /> */}
      <NavLink to='/' className="flex items-center gap-2 cursor-pointer">
        <img className="w-8 h-8" src={assets.logo} alt="logo" />
        <span className="text-xl font-bold text-blue-500">EmployMent India</span>
      </NavLink>
      
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden' />
        </NavLink >
        <NavLink to='/workers'>
          <li className='py-1'>ALL WORKERS</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden' />
        </NavLink >
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden' />
        </NavLink >
         <a target="_blank" href="https://employe-india-admin.onrender.com" className="border px-5 text-xs py-1.5 rounded-full font-medium">Admin Panel</a>
      </ul>
      <div className='flex item-center gap-4'>

        {
          token && userData
          ?
            <div className='flex item-center gap-2 cursor-pointer group relative' onClick={() => setShowProfileMenu(prev => !prev)}>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className={`${showProfileMenu ? 'block' : 'hidden'} absolute top-0 right-0 pt-14 text-bse font-medium text-gray-600 z-20 `}>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-service')} className='hover:text-black cursor-pointer'>My Service Request</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

        }
          <img onClick={()=>setShowmenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
       {/* ---------mobile menu------------- */}
      <div className={`${showMenu ?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          {/* <img className='w-36' src={assets.logo} alt="" /> */}
          <p  className='font-bold text-4xl text-blue-500 '>Employment India</p>
          <img className='w-7' onClick={()=>setShowmenu(false)} src={assets.cross_icon} alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
          <NavLink  onClick={()=>setShowmenu(false)} to='/' ><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
          <NavLink  onClick={()=>setShowmenu(false)} to='/workers' ><p className='px-4 py-2 rounded inline-block'>ALL WORKERS</p></NavLink>
          <NavLink  onClick={()=>setShowmenu(false)} to='/about' ><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
          <NavLink  onClick={()=>setShowmenu(false)} to='/contact' ><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
           <a target="_blank" href="https://employe-india-admin.onrender.com" className="border px-5 text-xs py-1.5 rounded-full font-medium">Admin Panel</a>
        </ul>
       </div>

      </div>

    </div>

  )
}

export default Navbar
