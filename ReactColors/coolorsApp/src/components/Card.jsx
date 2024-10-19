import React from 'react'
import "../styles/Card.css"

const Card = ({icon,introText, descText,onMouseEnter,onMouseLeave, id}) => {
  return (
    <div className='card' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} id={id}>
            <img src={icon} alt="icon"/>

            <div className='iconText'>
            <h4>{introText}</h4>
            <p>{descText}</p>
            </div>
         

        </div>
  )
}

export default Card