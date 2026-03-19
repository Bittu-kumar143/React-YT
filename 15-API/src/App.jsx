import React,{useState} from 'react'
import axios from 'axios' 

const App = () => {

  /*const getData = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res = await data.json()
    console.log(res)
  }*/

  const [data, setdata] = useState([])

  const getData = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data.data)
    setdata([data.data])
  }

  return (
    <div>
      <button onClick={getData}>get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.title} {idx}</h3>
        })}
      </div> 
    </div>
  )
}

export default App