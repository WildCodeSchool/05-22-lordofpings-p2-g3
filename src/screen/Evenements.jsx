import React, { useEffect } from 'react'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'
import Header from '../components/templates/Header'
import './Evenements.css'

const Evenements = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  return (
    <div className='container-80'>
      <h1>Evenements</h1>
    </div>
  )
}

export default Evenements
