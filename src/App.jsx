import './App.css'
import React,{useState}from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screen/Home'
import Annuaire from './screen/Annuaire'
import Evenements from './screen/Evenements'
import Apropos from './screen/Apropos'
<<<<<<< HEAD
import Annuaire from './screen/Annuaire'
=======
import Header from './components/templates/Header'
import Footer from './components/templates/Footer'
import Main from './components/templates/Main'
>>>>>>> dev

function App() {
  const [isHomePage, setIsHomePage] = useState(true)

  return (
    <div className='app-container'>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Apropos />} />
        {/* <Route path='/users' element={<Users />} /> */}
        <Route path='/directory' element={<Annuaire />} />
      </Routes>
=======
      <Header className='header' isHomePage={isHomePage}></Header>
      <Main>
        <Routes>
          <Route path='/' element={<Home setIsHomePage={setIsHomePage}/>} />
          <Route path='/annuaire' element={<Annuaire setIsHomePage={setIsHomePage} />} />
          <Route path='/evenement' element={<Evenements setIsHomePage={setIsHomePage} />} />
          <Route path='/about' element={<Apropos />} />
        </Routes>
      </Main>

      <Footer className='footer' />
>>>>>>> dev
    </div>
  )
}

export default App
