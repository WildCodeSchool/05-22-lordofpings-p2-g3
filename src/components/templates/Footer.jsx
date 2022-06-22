import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './Footer.css'
import facebookImg from '../../assets/images/logoResaux/facebook.png'
import instagramImg from '../../assets/images/logoResaux/instagram2.png'
import logoImg from '../../assets/images/Rock_your_band.png'
import twitterImg from '../../assets/images/logoResaux/twitter.png'

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
                    <NavLink
                      to='/'
                      className={({ isActive }) => {
                        return isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }}
                    >
                      Accueil
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink
                      to='/annuaire'
                      className={({ isActive }) => {
                        return isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }}
                    >
                      Annuaire
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/evenement'
                      className={({ isActive }) =>
                        isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }
                    >
                      &Eacute;venements
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to='/apropos'
                      className={({ isActive }) =>
                        isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }
                    >
                      A proros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/contact'
                      className={({ isActive }) =>
                        isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className='display'>
                    <NavLink
                      to='/connexion'
                      className={({ isActive }) =>
                        isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }
                    >
                      Connexion
                    </NavLink>
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
