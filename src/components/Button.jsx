import React, { useState } from 'react'
import './Button.css'

const Button = ({ name, shadow, bgColor }) => {
  const [isactive, setActive] = useState(false)

  const handleClick = () => {
    console.log('handle click', isactive)
    setActive(!isactive)
  }
  const shadowClass = {
    filter: `drop-shadow(4px 4px 4px ${shadow})`
  }

  const bg = {
    backgroundColor: `${bgColor}`
  }

  const mergeProperties = { ...shadowClass, ...bg }
  console.log(mergeProperties)
  const handleChange = e => {
    console.log('mouse enter')
  }

  return (
    <div className='btn__card wave' onMouseEnter={handleChange}>
      <button
        onClick={handleClick}
        style={{ ...shadowClass, ...bg }}
        className={`btn__card-bg ${isactive ? 'rotate' : 'notRotate'}`}
      ></button>
      <span
        onClick={handleClick}
        className={`btn__card-span`}
        onMouseEnter={handleChange}
      >
        {' '}
        {name}
      </span>
    </div>
  )
}

export default Button
