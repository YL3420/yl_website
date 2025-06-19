import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import profile_pic from '../assets/images/profile_pic.png'

const Navbar = ({copyText}) => {
  return (
    <nav className='bg-black fixed top-0 left-0 right-0 w-full z-50'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-24 items-center justify-between'>

                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
                        <img
                        className='h-16 w-auto'
                        src={profile_pic} alt='Yanchun Lai' />
                    </NavLink>
                <div className='flex-col'>
                    <span className='hidden md:block text-2xl font-bold ml-2'>
                        Yanchun Lai
                    </span>
                    <span className='hidden text-gray-600 md:block text-sm ml-2'>
                        <button className='hover:text-white' onClick={() => copyText('yl3796@cornell.edu')}>
                            yl3796@cornell.edu
                        </button> / <button className='hover:text-white' onClick={() => copyText('4256473050')}>
                            425-647-3050
                        </button>
                    </span>
                </div>
                </div>

                <div className='md:ml-auto'>
                    <div className='flex space-x-7'>
                        <NavLink to='/file-view/resume_yl_1.pdf' className='hover:text-white rounded-md px-3 py-2'>
                            View resume
                        </NavLink>
                        <NavLink to='/projects' className='hover:text-white rounded-md px-3 py-2'>
                            Projects
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar