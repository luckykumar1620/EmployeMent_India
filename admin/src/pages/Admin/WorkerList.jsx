import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const WorkerList = () => {

    const {aToken,workers,getAllWorkers,changeAvailability}=useContext(AdminContext)

    useEffect(()=>{
        if(aToken){
            getAllWorkers()
        }
    },[aToken])


  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
       <h1 className='text-lg font-medium'>All Workers</h1>
       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
            workers.map((item,index)=>(
             <div className='border border-indigo-200 rounded-xl basis-[calc(20%-16px)] overflow-hidden cursor-pointer group flex flex-col' key={index}>
                <div className="w-full h-40 bg-indigo-50 group-hover:bg-blue-100 transition-all duration-300">
                   <img  className="w-full h-full object-contain" src={item.image} alt="" />
                </div>
                <div className='p-4 flex flex-col justify-between flex-1'>
                <p className='text-neutral-800 font-medium text-lg'>{item.name}</p>
                <p className='text-zinc-600  text-sm'>{item.speciality}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                    <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                    <p>Available</p>
                </div>
               </div>
             </div> 
            ))
        }
       </div>
    </div>
  )
}

export default WorkerList
