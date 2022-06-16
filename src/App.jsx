import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screen/Home'
import Apropos from './screen/Apropos'
import Profiledetails from './screen/Profiledetails'

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/about' element={<Apropos />} />
        {/* <Route path='/users' element={<Users />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/profiledetails' element={<Profiledetails />} />
      </Routes>
    </div>
  )
}

export default App
