import React, {useState} from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)
  
  function increase(){
    setCounter(counter + 1)
  }

  function decrease(){
    setCounter(counter - 1)
  }

  const jump = () => {
    setCounter(counter + 5)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump}>increase 5</button>
    </div>
  )
}

export default App