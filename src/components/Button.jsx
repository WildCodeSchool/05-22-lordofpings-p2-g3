import React from 'react'
import './Button.css'

const Button = ({ name, reverse }) => {
  const border = reverse ? 'btn__card-reverse' : 'btn-card'

  const handleChange = e => {
    e.target.addClassName({ border })
    if (e.target.className =="btn__card"){
      console.log('btn__card', e.target.value)
     
    }
    if (e.target.className == "btn__card-bg") {
      console.log('btn__card', e.target.value)
    }
 
  }



  return (
    <div className='btn__card wave' onMouseEnter={handleChange}>
      <button className='btn__card-bg'></button>
      <span className="btn__card-span" onMouseEnter={handleChange}> {name}</span>

    </div>
  )
}

export default Button
