import React, { useState,useContext } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddWorker = () => {


    const [workImg,setWorkImg]=useState(null)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [experience,setExperience]=useState('1 Year')
    const [fees,setFees]=useState('')
    const [about,setAbout]=useState('')
    const [speciality,setSpeciality]=useState('Electrician')
    const [skill,setSkill]=useState('')
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('')

    const {backendUrl,aToken}=useContext(AdminContext)

    const onSubmitHandler= async(event)=>{
        event.preventDefault();

     try {

        if(!workImg){
            return toast.error('Image Not Selected')
        }

        const formData=new FormData()

        formData.append('image',workImg)
        formData.append('name',name)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('experience',experience)
        formData.append('fees',Number(fees))
        formData.append('about',about)
        formData.append('speciality',speciality)
        formData.append('skill',skill)
        formData.append('address',JSON.stringify({line1:address1,line2:address2}))

        //console log formdata
        formData.forEach((value,key)=>{
            console.log(`${key} : ${value}`)
        })

        const {data}=await axios.post(backendUrl + '/api/admin/add-worker',formData,{headers:{aToken}})

        if(data.success){
            toast.success(data.message)
            setWorkImg(null)
            setName('')
            setPassword('')
            setEmail('')
            setSkill('')
            setAddress1('')
            setAddress2('')
            setAbout('')
            setFees('')

        }else{
            toast.error(data.message)
        }
        
      } catch (error) {
        
        toast.error(error.message)
        console.log(error)

      }


    }


    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>

            <p className='mb-3 text-lg font-medium'>Add Worker</p>

            <div className='bg-white px-8 py-8 border border-black/10 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={workImg?URL.createObjectURL(workImg) :assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e)=>setWorkImg(e.target.files[0])} type="file" id='doc-img' hidden />
                    <p>Upload worker <br />picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600 '>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Worker Name</p>
                            <input onChange={(e)=>setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Worker Email</p>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Worker Password</p>
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Experience</p>
                            <select onChange={(e)=>setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="experience">
                                <option value="1 year">1 Year</option>
                                <option value="2 year">2 Year</option>
                                <option value="3 year">3 Year</option>
                                <option value="4 year">4 Year</option>
                                <option value="5 year">5 Year</option>
                                <option value="6 year">6 Year</option>
                                <option value="7 year">7 Year</option>
                                <option value="8 year">8 Year</option>
                                <option value="9 year">9 Year</option>
                                <option value="10 year">10 Year</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Fees</p>
                            <input onChange={(e)=>setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
                        </div>

                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Speciality</p>
                            <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name="" id="speciality">
                                <option value="Electrician">Electrician</option>
                                <option value="Ac Technician">Ac Technician</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Welder">Welder</option>
                                <option value="Painter">Painter</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Skill</p>
                            <input onChange={(e)=>setSkill(e.target.value)} value={skill} className='border rounded px-3 py-2' type="text" placeholder='Skill' required />
                        </div>

                        <div className='flex-1 flex flex-col  gap-1'>
                            <p>Address</p>
                            <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='Address1' required />
                            <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='Address2' required />
                        </div>

                    </div>
                </div>

                <div>
                    <p className='mt-4 mb-2'>About Worker</p>
                    <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' placeholder='Write about doctor' rows={5} required />
                </div>

                <button type='submit' className='bg-blue-500 px-10 py-3 text-white border rounded-full'>Add worker</button>

            </div>

        </form>
    )
}

export default AddWorker
