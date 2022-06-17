import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import './Footer.css'
import facebookImg from '../../assets/images/logoResaux/facebook.png'
import logoImg from '../../assets/images/rockYourBand-transparent.png'
import twitterImg from '../../assets/images/logoResaux/twitter.png'
import instagramImg from '../../assets/images/logoResaux/instagram.png'

const Footer = () => {
  const [openNav, setopenNav] = useState(true)

  function miracleNav() {
    setopenNav(!openNav)
  }

  return (
    <>
      <footer>
        <div>
          <p className='resaux'>Suivez nous sur nos réseaux :</p>
          <div className='footerbody'>
            <ul className='image'>
              <li className='logofooter display'>
                <a href=''>
                  <img id='logof' src={logoImg} alt='logo rock band'></img>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/'>
                  <img src={facebookImg} alt='logo facebook'></img>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/?hl=fr'>
                  <img src={twitterImg} alt='logo twitter'></img>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/?lang=fr'>
                  <img src={instagramImg} alt='logo instagram'></img>
                </a>
              </li>
            </ul>
            <div className='nav'>
              <label
                htmlFor='toggle'
                onClick={miracleNav}
                className={`labelActive ${openNav ? 'notRotate' : 'rotate180'}`}
              >
                ☰
              </label>
              <input type='checkbox' id='toggle' />
              <div className='mobileMenu'>
                <ul className='redirection'>
                  <li className='action'>
                    <Link to='/'>
                      <a className='activepage'>Accueil</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/annuaire'>
                      <a>Annuaire</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/event'>
                      <a>Evénements</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/about'>
                      <a>A propos</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li className='display'>
                    <Link to='/connexion'>
                      <a>Connexion</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className='copyright'>Copyright Ⓒ - Rock Your Band - 2022</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
