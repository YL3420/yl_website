import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'


const Card = ({ title, tags, description, banner, banner_name='banner', demo_link='no_demo', repo_link='no_repo' }) => {
    return (
        <div className='bg-gray-800 rounded-md relative flex flex-col'>
            <div className='pt-4 px-4 flex flex-col'>
                <div className='mb-5'>
                    <h3 className='text-xl font-bold'>{ title }</h3>
                    <div className='text-zinc-500 text-sm my-2'>{ tags }</div>
                </div>

                <div className='mb-2'>
                    <p className='text-zinc-500'>
                        { description }
                    </p>  
                </div>

            </div>

            <div className='mt-auto p-4'>
                <div className='flex flex-c``ol gap-4 lg:flex-row mb-4'>
                    {   demo_link ?
                        <Link
                            to={ demo_link }
                            target={'_blank'}
                            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                        >
                            Demo
                        </Link> : <></>
                    }

                    {
                        repo_link ?
                        <Link
                            to={ repo_link }
                            target={'_blank'}
                            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                        >
                            Github
                        </Link> : <></>
                    }

                </div>

                <div className='border border-t-[0.5px] border-zinc-500 mb-5'></div>

                {/* <Cropper image={orie_img} crop={crop} zoom={1} aspect={1} onCropChange={setCrop} />
                */}

                <div className='h-55 overflow-hidden rounded-md'>
                    <img src={banner} alt='orie_img' className='object-cover w-full max-h-[270px]' />
                </div>
            </div>
        </div>
    )
}

export default Card