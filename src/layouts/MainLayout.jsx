import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = ({ copyText }) => {
  return (
    // <>
      <main className='flex flex-col justify-between'>
        <Navbar copyText={copyText} />
        <Outlet />
        <Footer copyText={copyText} />
        <ToastContainer />
      </main>  
    // </>
  )
}

export default MainLayout