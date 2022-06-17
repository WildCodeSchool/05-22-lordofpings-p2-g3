import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home'
import Annuaire from './screen/Annuaire'
import Evenements from './screen/Evenements'
import Apropos from './screen/Apropos'
import Profiledetails from './screen/Profiledetails'
import Header from './components/templates/Header'
import Footer from './components/templates/Footer'
import Main from './components/templates/Main'

function App() {
  const [isHomePage, setIsHomePage] = useState(true)

  return (
    <div className='app-container'>
      <Header className='header' isHomePage={isHomePage}></Header>
      <Main className="main">
        <Routes>
          <Route path='/' element={<Home setIsHomePage={setIsHomePage} />} />
          <Route
            path='/annuaire'
            element={<Annuaire setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/evenement'
            element={<Evenements setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/profilesdetails'
            element={<Profiledetails setIsHomePage={setIsHomePage} />}
          />
          <Route path='/about' element={<Apropos />} />
        </Routes>
      </Main>

      <Footer className='footer' />
    </div>
  )
}

export default App
