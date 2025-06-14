import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { toast } from 'react-toastify'

const Footer = ({copyText}) => {


    return (
        <footer className='bg-gray-800 rounded-lg m-4 mt-10'>
            <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
                <span className='text-sm sm:text-center '>
                © { new Date().getFullYear() } Yanchun Lai
                </span>

                <ul className='flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0'>
                <li>
                    <button onClick={() => copyText('yl3796@cornell.edu')} 
                    className='hover:text-white me-4 md:me-6 flex items-center'>
                        <AiOutlineMail className='text-xl' />
                    </button>
                </li>
                <li>
                    <Link to='https://www.linkedin.com/in/yanchun-lai-5350401b9' 
                    target={'_blank'} className='hover:text-white me-4 md:me-6 flex items-center'>
                        <AiFillLinkedin className='text-xl' />
                    </Link>
                </li>
                <li>
                    <Link to='https://github.com/YL3420'
                    target={'_blank'} className='hover:text-white me-4 md:me-6 flex items-center'>
                        <AiFillGithub className='text-xl' />
                    </Link>
                </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer