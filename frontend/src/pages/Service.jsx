import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedWorkers from '../components/RelatedWorkers';
import {toast} from 'react-toastify'
import axios from 'axios';


const Service = () => {

  const { workId } = useParams();

  const navigate=useNavigate()

   const {workers,currencySymbol,backendUrl,token,getWorkersData}=useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [workerInfo, setWorkerInfo] = useState(null);
  const [workerSlots, setWorkerSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchWorkerInfo = () => {
    const workerInfo = workers.find(work => work._id === workId);
    setWorkerInfo(workerInfo);
  }

  const getAvailableSlots = () => {
    if(!workerInfo) return;
    setWorkerSlots([])
    let finalSlots = [];
    //getting current date
    let today = new Date()
    
    for (let i = 0; i < 7; i++) {
      //geting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1; 
      let year = currentDate.getFullYear();

      const slotDate = `${day}_${month}_${year}`; // ✅ ab backend ke format se match karega
      const slotTime = formattedTime;

      // ✅ safe check with optional chaining
      const isSlotAvailable = workerInfo.slots_booked?.[slotDate]?.includes(slotTime) ? false : true;

      if (isSlotAvailable) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });
      }

        //increament current time with 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
        //allSlots.push(timeSlots);
     //  setWorkerSlots(prev => [...prev, timeSlots])
      finalSlots.push(timeSlots);

    }
     setWorkerSlots(finalSlots); 
  }


   const bookService=async()=>{
    if(!token){
      toast.warn('please login to book service')
      navigate('/login')
      return
    }

    try {

      const date=workerSlots[slotIndex][0].datetime

      let day=date.getDate()
      let month=date.getMonth()+1
      let year=date.getFullYear()

      const slotDate=day+"_"+month+"_"+year

      const {data}= await axios.post(backendUrl + '/api/user/book-service',{workId,slotDate,slotTime},{headers:{token}})

        if(data.success){
           toast.success(data.message)
           getWorkersData()
           navigate('/my-service')
        }else{
          toast.error(data.message)
        }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(() => {
    fetchWorkerInfo()
  }, [workers, workId]);

  useEffect(() => {
    getAvailableSlots();
  }, [workerInfo]);

  useEffect(() => {
    console.log(workerSlots);
  }, [workerSlots]);

  return workerInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 items-start'>
        {/* ----worker details---------- */}
        <div className='sm:w-72 h-[250px] bg-blue-500 flex items-center justify-center rounded-lg'>
          <img
            className='max-h-full max-w-full object-contain'
            src={workerInfo.image}
            alt={workerInfo.name}
          />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-4 bg-white h-[250px] overflow-y-auto'>
          {/* -----worker info:name ,degree ,experiance ----------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {workerInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{workerInfo.skill}-{workerInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{workerInfo.experience}</button>
          </div>
          {/* ----worker About----------------- */}
          <div >
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{workerInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Service fee: <span className='text-gray-600'>{currencySymbol}{workerInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* ------BOOKING SLOT------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            workerSlots.length && workerSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
          {
            workerSlots.length && workerSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-500 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button onClick={bookService} className='bg-blue-500 text-white font-light px-14 py-3 rounded-full my-6'>Book an service</button>
      </div>
      {/* --------listing related workers-------- */}
      <RelatedWorkers workId={workId} speciality={workerInfo.speciality} />

    </div>
  )
}

export default Service

