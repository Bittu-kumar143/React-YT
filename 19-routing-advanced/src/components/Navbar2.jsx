import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar2 = () => {

  let navigate = useNavigate()

  return (
    <div>
        <button
        onClick={()=>{
            navigate('/')
        }}>
            return to homePage
        </button>

        <button
        onClick={()=>{
            navigate(-1)
        }}>
            back
        </button>

        <button onClick={()=>{
            navigate(+1)
        }}>next</button>
    </div>
  )
}

export default Navbar2