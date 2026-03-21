import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div>
        <Link to="/Contact/Men">Men</Link>
        <Link to="/Contact/Women">Women</Link>
        </div>
        <Outlet  />
    </div>
  )
}

export default Contact