import React from 'react'
import about_me from '../assets/texts/about_me.txt?raw'


const Hero = () => {
    return (
        <section className='pt-20 pb-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <h1 className='text-xl font-extrabold sm:text-5xl md:text-6xl'>
                    Hello!
                </h1>
                <p className='my-4 text-2xl leading-relaxed'>
                    {about_me}
                    {/* I am a undergraduate at Cornell University studying Computer Science.
While studying core Computer Science principles and the underlying mathematical topics that accompany them,
I have a strong interest in studying NP-hard problems as well in Operations Research.
As a member of the Cornell Scheduling Team, I worked on a team of undergraduates under the guidance of Professor Shmoys to 
solve the exam timetabling problem for the university registrar. During my last semester, I completed the partial implementation of 
a multi-step metaheuristic that uses greedy algorithm and simulated annealing to improve future final exam schedules for all students. */}
                </p>
            </div>
        </section>
    )    
}

export default Hero