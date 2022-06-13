import React from 'react'
import './Button.css'

const Button = ({name,reverse}) => {
  const border = reverse? "btn-card-reverse":"btn-card";

  return (
    <button className="btn-card">
      {name}
    </button>
  )
}

export default Button
