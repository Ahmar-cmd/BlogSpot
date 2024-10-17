import './App.css'
import React,{ useEffect , useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Header,Footer } from './components';
import authService from './appwrite/auth';

function App(){

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
      authService.getCurrentUser().then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
    },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200 border shadow-md shadow-black '>
      <div className='w-full'>
        <Header/>
           <main>
             <Outlet/>
           </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center h-screen'>
       <div className='animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500'></div>
     </div>
  )
}

export default App
