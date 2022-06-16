import React, { useEffect } from 'react'
import './Apropos.css'

const Apropos = ({setIsHomePage}) => {

  useEffect(() => {
    return setIsHomePage(false)
  }, [])


  return (
    <div>
     
        <h1>A propos</h1>
      
    </div>
  )
}

export default Apropos