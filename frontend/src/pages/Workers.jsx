import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Workers = () => {

  const {speciality}=useParams();

  const [filterWorker,setFilterWorker]=useState([]);
  const [showFilter,setShowFilter]=useState(false);
  const navigate=useNavigate();

  const {workers}=useContext(AppContext);

  const applyFilter=()=>{
    if(speciality){
      setFilterWorker(workers.filter(work=>work.speciality===speciality));
    }else{
      setFilterWorker(workers);
    }
  }

  useEffect(()=>{
    applyFilter();
  },[workers,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the workers specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?'bg-blue-500 text-white':''}`} onClick={()=>setShowFilter(prev=>!prev)}>filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ?'flex':'hidden sm:flex'}`}>
          <p onClick={()=>speciality==='Electrician'?navigate('/workers'):navigate('/workers/Electrician')} className={`w-full sm:m-auto pl-3 py-1.5 pr-24 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Electrician'?"bg-indigo-100 text-black":""}`}>Electrician</p>
          <p onClick={()=>speciality==='Ac Technician'?navigate('/workers'):navigate('/workers/Ac Technician')} className={`w-full sm:m-auto pl-3 py-1.5 pr-24 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Ac Technician'?"bg-indigo-100 text-black":""}`}>Ac Technician</p>
          <p onClick={()=>speciality==='Carpenter'?navigate('/workers'):navigate('/workers/Carpenter')} className={`w-full sm:m-auto pl-3 py-1.5 pr-24 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Carpenter'?"bg-indigo-100 text-black":""}`}>Carpenter</p>
          <p onClick={()=>speciality==='Plumber'?navigate('/workers'):navigate('/workers/Plumber')} className={`w-full sm:m-auto pl-3 py-1.5 pr-24  border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Plumber'?"bg-indigo-100 text-black":""}`}>Plumber</p>
          <p onClick={()=>speciality==='Welder'?navigate('/workers'):navigate('/workers/Welder')} className={`w-full sm:m-auto pl-3 py-1.5 pr-24 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Welder'?"bg-indigo-100 text-black":""}`}>Welder</p>
          <p onClick={()=>speciality==='Painter'?navigate('/workers'):navigate('/workers/Painter')} className={`w-full sm:m-auto pl-3 py-1.5 pr-24 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Painter'?"bg-indigo-100 text-black":""}`}>Painter</p>
        </div>

        <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6'>
          {
            filterWorker.map((item,index)=>(
            <div onClick={()=>navigate(`/service/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                {/* <img className='bg-blue-50' src={item.image} alt="" /> */}
                <div className="w-full h-40 bg-blue-50 flex items-center justify-center">
                <img className=' h-40 object-contain rounded-md' src={item.image} alt="" />
                </div>
                <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center ${item.available?'text-green-500':'text-gray-500'} `}>
                        <p className={`w-2 h-2 ${item.available?' bg-green-500':'bg-gray-500'} rounded-full`}></p><p>{item.available?'Available':'Not Available'}</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>   
        ))
          }
        </div>
      </div>
    </div>
  )
}

export default Workers

