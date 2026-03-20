import React,{useState} from 'react'
import { useEffect } from 'react'
import Cards from './components/Cards'
import axios from 'axios'


const App = () => {

  const [apidata, setApidata] = useState([])

  const [page, setPage] = useState(1)

  const images = async () => {
      const imagedata = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=24`)
      setApidata(imagedata.data)
  }

  useEffect(function(){
    images()  
  },[page])

  /*let photos = 'No User Available'
  
  if(apidata.length > 0){
    photos = apidata.map(function(elem,key){
    return <div>
      <img src={elem.download_url} alt="" />
    </div>
  })
}*/

let Nophoto = 'No User Available'

function photos(){
  return apidata.map(function(elem,idx){
    return <div key={idx}>
      <Cards elem={elem} />
    </div>
  })
}

  return (
    <div className='bg-black min-h-screen text-white'>
      <div className='bg-black flex flex-wrap gap-4'>
        {photos()}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button
         style={{opacity: page == 1 ? 0.5 : 1}}
         className='bg-amber-400 text-black px-4 py-2 rounded-lg' onClick={()=>{
          if(page > 1){
            setApidata([])
            setPage(page-1) 
          }
        }}>Prev</button>

        <h1>Page {page}</h1>

        <button className='bg-amber-400 text-black px-4 py-2 rounded-lg ml-2' onClick={()=>{
          setApidata([])
          setPage(page+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App