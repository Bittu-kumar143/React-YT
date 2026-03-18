import React, {useState} from 'react'

const App = () => {

  const [name, setName] = useState({name: 'John', age: 30})

  const btnClicked = () => {
    const newName = {...name}
    newName.name = 'Jane'
    newName.age = 25
    setName(newName)  
  }

  return (
    <div>
      <h1>name is {name.name} and age is {name.age}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App