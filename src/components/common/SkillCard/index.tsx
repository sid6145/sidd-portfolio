import React from 'react'
import "./skillcard.css"

type SkillCard = {
  label: string;
  image: string;
}


const SkillCard = (props) => {
  return (
    <div className='skillCardRoot'>
        <img src={props.image} alt='skill-img' />
        <h4>{props.label}</h4>
    </div>
  )
}

export default SkillCard