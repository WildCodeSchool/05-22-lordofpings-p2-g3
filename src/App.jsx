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
import GraphqlPage from './screen/Debug/Graphqlpage'
import EventDetails from './components/Eventdetails'
import './App.css'
import LoginPage from './screen/LoginPage'
import Playlist from './screen/PlayList'
import UserProfil from './screen/UserProfil'

function App({ isDebugMode = true }) {
  const [isHomePage, setIsHomePage] = useState(true)

  return (
    <div className='app-container'>
      <Header className='header' isHomePage={isHomePage} />
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
            path='/eventdetails/:id'
            element={<EventDetails setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/profilesdetails/:id'
            element={<Profiledetails setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/about'
            element={<Apropos setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/login'
            element={<LoginPage setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/user-profil/:id'
            element={<UserProfil setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/playlist'
            element={<Playlist setIsHomePage={setIsHomePage} />}
          />
          <Route
            path='/graphql'
            element={<GraphqlPage setIsHomePage={setIsHomePage} />}
          />
        </Routes>
      </Main>

      <Footer className='footer' />
    </div>
  )
}

export default App
