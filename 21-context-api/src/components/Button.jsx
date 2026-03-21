import React from 'react'
import {useContext} from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

function changeTheme(){
    setTheme('dark')
}

  return (
    <div>
        <button onClick={changeTheme}>change theme</button>
    </div>
  )
}

export default Button