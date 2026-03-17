import React from 'react'

const Card = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h1>{props.name},{props.age}</h1>
      <button>view profile</button>
    </div>
  )
}

export default Card