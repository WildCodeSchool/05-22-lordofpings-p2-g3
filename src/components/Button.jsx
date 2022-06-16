import React from 'react'
import './Button.css'


const Button = ({ key, name, shadow,bgColor,icone }) => {
 

  const  shadowClass= {
    filter: `drop-shadow(4px 4px 4px ${shadow})`
  }

  const bg= {
    // background: `url(${icone}) center center /cover`,
    // width: '300px'
    backgroundColor: `${bgColor}`,
  }
  
  const mergeProperties = { ...shadowClass, ...bg }
  console.log(mergeProperties)
  const handleChange = e => {
    console.log('mouse enter')
  }

  return (
    <div   className='btn__card wave' onMouseEnter={handleChange}>
      <button style={{ ...shadowClass, ...bg }} className='btn__card-bg '></button>
      <span className='btn__card-span' onMouseEnter={handleChange}>
        {' '}
        {name}
      </span>
    </div>
  )
}

export default Button
