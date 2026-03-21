import React from 'react'
import{ Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-cyan-900 text-white justify-between'>
        <h1 className='text-2xl font-bold'>Bittu</h1>
        <div className='flex gap-8'>
            <Link className='text-lg font-medium' to="/">Home</Link>
            <Link className='text-lg font-medium' to="/About">About</Link>
            <Link className='text-lg font-medium' to="/Contact">Contact</Link>
            <Link className='text-lg font-medium' to="/Courses">Courses</Link>
        </div>
    </div>
  )
}

export default Navbar