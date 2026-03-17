import React from 'react'

const Cards = (props) => {
  return (
    <div className='Cards'>
        <div className='top'>
            <p1>{props.availability}</p1>
            <p2>{props.fee}</p2>
        </div>
        <div className='top-center'>
            <img src={props.image} alt="None" />
            <h1>{props.name}</h1>
            <h2><span>{props.skill}</span></h2>
            <h3>{props.rating}</h3>

            <div className='tag1'>
                {props.services.map(function(elem){
                    return <button>{elem}</button>
                })}
            </div>
            <div className='tag2'>
                <p>{props.intro}</p>
            </div>
        </div>
        <div className='profile'>
            <button>view profile</button>
        </div>
    </div>
  )
}

export default Cards