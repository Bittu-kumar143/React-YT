import React from 'react'

function Cards(props) {
  return (
    <div>
        <a href={props.elem.url}>
        <div className='bg-gray-800 p-2 rounded-lg'>
      <img className='h-40 w-40 object-cover' src={props.elem.download_url} alt=""/>
    </div>
    <h1>{props.elem.author}</h1>
      </a>  
    </div>
  )
}

export default Cards