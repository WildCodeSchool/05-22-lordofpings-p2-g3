import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home'
import Annuaire from './screen/Annuaire'
import Evenements from './screen/Evenements'
import Apropos from './screen/Apropos'
import Profiledetails from './screen/Profiledetails'
import ProfiledetailsG from './screen/ProfiledetailsG'
import Header from './components/templates/Header'
import Footer from './components/templates/Footer'
import Main from './components/templates/Main'
import GraphqlPage from './screen/Debug/Graphqlpage'
import EventDetails from './screen/Eventdetails'
import './App.css'
import LoginPage from './screen/LoginPage'
import Playlist from './screen/PlayList'
import UserProfil from './screen/UserProfil'
import Contact from './screen/Contact'

import SignIn from './components/graphql/SignIn'
import UserContext from './contexts/UserContext'

function App({ isDebugMode = true }) {
  const [isHomePage, setIsHomePage] = useState(true)
  const [selectGroupe, setSelectGroupe] = useState(false)

  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    avatar: '',
    language: 'fr -FR',
    theme: 'auto',
    token: null
  })

  return (
    <UserContext.Provider
      value={{ userInfo: userInfo, setUserInfo: setUserInfo }}
    >
      <div className='app-container'>
        <Header
          className='header'
          isHomePage={isHomePage}
          setSelectGroupe={setSelectGroupe}
        />
        <Main className='main'>
          <Routes>
            <Route path='/' element={<Home setIsHomePage={setIsHomePage} />} />
            <Route
              path='/annuaire'
              element={
                <Annuaire
                  setIsHomePage={setIsHomePage}
                  selectGroupe={selectGroupe}
                />
              }
            />
            <Route
              path='/evenement'
              element={<Evenements setIsHomePage={setIsHomePage} />}
            />

            <Route
              path='/evenement/:id'
              element={<EventDetails setIsHomePage={setIsHomePage} />}
            />
            <Route
              path='/profilesdetails/:id'
              element={<Profiledetails setIsHomePage={setIsHomePage} />}
            />
            <Route
              path='/profilesdetailsG/:id'
              element={<ProfiledetailsG setIsHomePage={setIsHomePage} />}
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
            <Route
              path='/contact'
              element={<Contact setIsHomePage={setIsHomePage} />}
            />
          </Routes>
        </Main>
        <Footer className='footer' />
      </div>

      {console.log('userinfo app', userInfo)}
    </UserContext.Provider>
  )
}

export default App
