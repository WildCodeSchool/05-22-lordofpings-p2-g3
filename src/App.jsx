import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screen/Home'
import Apropos from './screen/Apropos'
import Annuaire from './screen/Annuaire'

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Apropos />} />
        {/* <Route path='/users' element={<Users />} /> */}
        <Route path='/directory' element={<Annuaire />} />
      </Routes>
    </div>
  )
}

export default App
