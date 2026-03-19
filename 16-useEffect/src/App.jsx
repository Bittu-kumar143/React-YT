import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

const App = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  useEffect(function(){
    console.log("useEffect {number1} is running...")
  }, [number1])

  useEffect(function(){
    console.log("useEffect {number2} is running...")
  }, [number2])
  
  return (
    <div>
      <h1>number1 {number1}</h1>
      <h1>number2 {number2}</h1>

      <button onClick={() =>{
        setNumber1(number1+1)
      }}
      >button</button>

      <button onClick={()=>{
        setNumber2(number2-1)
      }}>button2</button>
    </div>
  )
}

export default App