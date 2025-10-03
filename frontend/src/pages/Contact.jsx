import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
         <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
         </div>
       
       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
         
         <img className='w-full md:max-w-[360px]' src={assets.contact_img} alt="" />

         <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>54709 Khapoli,Pune <br /> Maharashtra, India</p>
          <p className='text-gray-500'>Tel: (415) 555‑0132 <br />Email: lucky9110132241@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at EMPLOYMENT INDIA</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black py-4 px-8 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
         </div>
       </div>

    </div>
  )
}

export default Contact
