import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import '../index.css';
import Hero from '../components/Hero.jsx'
import Cards from '../components/Cards.jsx'

const HomePage = () => {
  return (
    <div className='pt-24'>

        {/* Hero  */}
        <Hero />

        {/* cards */}
        <Cards />

    </div>
  )
}

export default HomePage