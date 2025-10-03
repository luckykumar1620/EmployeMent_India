import React,{useContext} from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllServices from './pages/Admin/AllServices';
import Sidebar from './components/Sidebar';
import AddWorker from './pages/Admin/AddWorker';
import WorkerList from './pages/Admin/WorkerList';
import { WorkerContext } from './context/WorkerContext';
import WorkerDashboard from './pages/Worker/WorkerDashboard';
import WorkerServices from './pages/Worker/WorkerServices';
import WorkerProfile from './pages/Worker/WorkerProfile';

const App = () => {

  const {aToken}=useContext(AdminContext)
  const {wToken}=useContext(WorkerContext)

return aToken || wToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          {/* Admin Route */}
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-services' element={<AllServices/>} />
          <Route path='/add-worker' element={<AddWorker/>} />
           <Route path='/worker-list' element={<WorkerList/>} />

           {/* Worker Route */}
           <Route path='/worker-dashboard' element={<WorkerDashboard/>} />
           <Route path='/worker-services' element={<WorkerServices/>} />
           <Route path='/worker-profile' element={<WorkerProfile/>} />
        </Routes>
      </div>
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App
