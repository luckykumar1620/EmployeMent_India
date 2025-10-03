import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Workers from './pages/Workers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyService from './pages/MyService'
import Service from './pages/Service'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>

      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/workers' element={<Workers/>}/>
       <Route path='/workers/:speciality' element={<Workers/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/my-profile' element={<MyProfile/>}/>
       <Route path='/my-service' element={<MyService/>}/>
       <Route path='/service/:workId' element={<Service/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
