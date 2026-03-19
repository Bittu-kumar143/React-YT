import React,{useState} from 'react'

const App = () => {

  const [notes, setNotes] = useState('') 
  const [details, setDetails] = useState('')

  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const copyTasks = [...tasks]

    copyTasks.push({notes,details})
    
    setTasks(copyTasks) 

    setNotes('')
    setDetails('')
  }

  return (
    <div className='h-screen bg-black'>
      <form onSubmit={(e) =>{
        handleSubmit(e)
      }} className='flex p-10 items-start gap-5'>
        
        <input 
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value)
         }}
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-1/2 py-2 border-2 rounded'
        text-color='black'
        />

        <textarea 
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
        type="text" 
        placeholder='Enter Details'
        className='px-5 w-1/2 py-2 border-2 rounded'
        text-color='black'
        />

        <button className='bg-white text-black w-1/2 px-5 py-2 rounded'>add Notes</button>
        
        <img src="data:image/png;base64,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" alt="" />
      </form>
      <div>
        <div>
           
          /*Creats cards and runs loop on them of the stored value array*/
          

        </div>
      </div>
    </div>
  )
}

export default App