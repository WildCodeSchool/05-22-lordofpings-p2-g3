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
import GraphqlPage from './screen/Graphqlpage.jsx'


function App() {
  const [isHomePage, setIsHomePage] = useState(true)

  return (
    <div className='app-container'>
      <Header className='header' isHomePage={isHomePage}></Header>
      <Main className='main'>
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
          <Route
            path='/about'
            element={<Apropos setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/graph'
            element={<GraphqlPage setIsHomePage={setIsHomePage} />}
          />
        </Routes>
      </Main>

      <Footer className='footer' />
    </div>
  )
}

export default App
