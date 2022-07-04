/* eslint*/
import './Header.css'
import { useState } from 'react'
import logo from '../../assets/images/rockYourBand-transparent.png'
import imageBtnLeft from '../../assets/images/musique-de-guitare.png'
import imageBtnRight from '../../assets/images/groupe-musique-2.webp'

import Button from '../../components/Button'
import { Link, NavLink } from 'react-router-dom'
import login from '../../assets/images/login.png'
import profil from '../../assets/images/vincent.png'

const userId = 1

const Header = ({ isHomePage = false, isDebugMode = false }) => {
  // const [isHomePage, setIsHomePage] = useState(true);
  const [isActive, setIsActive] = useState()

  let activeStyle = {}

  return (
    <header className='header'>
      {isHomePage && (
        <>
          <div className='home'>
            <div className='header__home '>
              <div className=' p-20'>
                <div className='logo'>
                  <Link to='/playlist'>
                    <img src={logo} alt='rockYourBand-logo' />
                  </Link>
                </div>

                <nav className='home__container p-20 flex-row'>
                  <div className='navbarre '>
                    <ul>
                      <li>
                        {/* navlink ici */}
                        <NavLink
                          to='/'
                          className={({ isActive }) => {
                            console.log('accueil', isActive)
                            return isActive ? 'btn-active' : 'btn-inactive'
                          }}
                        >
                          Accueil
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/annuaire'
                          className={({ isActive }) =>
                            isActive ? 'btn-active' : 'btn-inactive'
                          }
                        >
                          Annuaire
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/evenement'
                          className={({ isActive }) => {
                            console.log(isActive)
                            return isActive ? 'btn-active' : 'btn-inactive'
                          }}
                        >
                          &Eacute;venements
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/about'
                          className={({ isActive }) =>
                            isActive ? 'active' : undefined
                          }
                        >
                          A propos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/contact'
                          className={({ isActive }) =>
                            isActive ? 'btn-active' : 'btn-inactive'
                          }
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className='home__container flex-row header__right '>
                    <Link to={`/user-profil/${userId}`}>
                      <div className='home__profil'>
                        <img src={profil} className='home__profil_img' />
                      </div>
                    </Link>
                    <Link to='/login'>
                      <button className='header__login '>
                        <p> Connexion</p>
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>

              <div className='hero-container'>
                <div className='hero__btn-container'>
                  <Link to='/annuaire'>
                    <Button
                      name='Recherche musicien'
                      bgColor={`var(--primary-1)`}
                      shadow={`var(--gray-3)`}
                    ></Button>
                  </Link>

                  <Link to='/annuaire'>
                    <Button
                      name='Recherche groupe'
                      bgColor={`var(--gray-1)`}
                      shadow={`var(--orange-logo)`}
                    ></Button>
                  </Link>
                </div>
                <div className='hero-vp'>
                  <h1>Rock your Band</h1>
                  <h2>
                    <span className='style1'>connection</span> with other
                    musician is <span className='style2'>easy</span>{' '}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!isHomePage && (
        // <div className='nothome'>
        <header className='header-color  p-20'>
          <div className='logo'>
            <Link to='/playlist'>
              <img src={logo} alt='rockYourBand-logo' />
            </Link>
          </div>

          <nav className='home__container flex-row flex-center'>
            <div className='navbarre'>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'btn-active' : 'btn-inactive'
                    }
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/annuaire'
                    className={({ isActive }) => {
                      console.log('annuaire', isActive)
                      return isActive ? 'btn-active' : 'btn-inactive'
                    }}
                  >
                    Annuaire
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/evenement'
                    className={({ isActive }) =>
                      isActive ? 'btn-active' : 'btn-inactive'
                    }
                  >
                    &Eacute;venements
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    A propos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                      isActive ? 'btn-active' : 'btn-inactive'
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='home__container flex-row header__right '>
              <Link to={`/user-profil/${userId}`}>
                <div className='home__profil'>
                  <img src={profil} className='home__profil_img' />
                </div>
              </Link>
              <Link to='/login'>
                <button className='header__login '>
                  <p> Connexion</p>
                </button>
              </Link>
            </div>
          </nav>
        </header>
        // </div>
      )}
    </header>
  )
}
export default Header
