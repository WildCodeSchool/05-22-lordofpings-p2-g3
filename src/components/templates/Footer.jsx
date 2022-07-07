import React, { useContext, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './Footer.css'
import facebookImg from '../../assets/images/logoResaux/facebook.png'
import instagramImg from '../../assets/images/logoResaux/instagram2.png'
import logoImg from '../../assets/images/Rock_your_band.png'
import twitterImg from '../../assets/images/logoResaux/twitter.png'
import profil from '../../assets/images/vincent.png'

import UserContext from '../../contexts/UserContext'
const DIRECTUS_URL = 'https://yv3o2geh.directus.app'
const userId = 1
const Footer = () => {
  const [openNav, setopenNav] = useState(true)
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [userImg, setUsrImg] = useState()

  useEffect(() => {
    console.log(`DIRECTUS_URL/assets/${userInfo.avatar}`)
    // userInfo.avatar != null ?
    userInfo.avatar == null
      ? setUsrImg('https://imgur.com/To08fWB.png')
      : setUsrImg(`${DIRECTUS_URL}/assets/${userInfo.avatar}`)
  }, [userInfo])

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
                <Link to='/'>
                  <img id='logof' src={logoImg} alt='logo rock band'></img>
                </Link>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.facebook.com/'
                  rel='noreferrer'
                >
                  <img src={facebookImg} alt='logo facebook'></img>
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.instagram.com/?hl=fr'
                  rel='noreferrer'
                >
                  <img src={twitterImg} alt='logo twitter'></img>
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://twitter.com/?lang=fr'
                  rel='noreferrer'
                >
                  <img src={instagramImg} alt='logo instagram'></img>
                </a>
              </li>
            </ul>
            <div className='nav'>
              {userInfo.avatar != '' &&
                localStorage.getItem('rock-your-band') != null && (
                  <Link to={`/user-profil/${userId}`}>
                    <img src={userImg} className='footer_profil' />
                  </Link>
                )}
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
                      to='/about'
                      className={({ isActive }) =>
                        isActive
                          ? 'redirection-active link-footer footer-active'
                          : 'btn-inactive link-footer'
                      }
                    >
                      A propos
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
                      to='/login'
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
