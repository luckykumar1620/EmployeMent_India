import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-40 my-10 mt-40 text-sm'>

                {/* -----left section------ */}
                <div>
                    <div className="flex items-center gap-2 mb-5">
                        <img className='h-8 w-14' src={assets.logo} alt="" />
                        <span className="text-xl font-bold text-blue-500">Employment India</span>
                    </div>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Employment India connects you with skilled and trusted workers across the country. Whether you need an electrician, plumber, carpenter, or any other service, we make booking hassle-free, reliable, and fast. Your convenience and safety are our top priority</p>
                </div>


                {/* -----center section------ */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                {/* -----right section------ */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-9065728764</li>
                        <li>lucky9110132241@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ------Copyright text------- */}
            <div>
                <hr />
                <p className='text-sm text-center py-5'>Copyright ©2025 Employment India - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
