/* eslint*/
import { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/rockYourBand-transparent.png'
import imageBtnLeft from '../../assets/images/musique-de-guitare.png'
import imageBtnRight from '../../assets/images/groupe-musique-2.webp'

import Button from '../../components/Button'
import { Link, NavLink } from 'react-router-dom'

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
                  <img src={logo} alt='rockYourBand-logo' />
                </div>

                <nav className='navbarre'>
                  <ul>
                    {isDebugMode && (
                      <li>
                        <NavLink
                          to='/graph'
                          className={({ isActive }) => {
                            console.log('accueil', isActive)
                            return isActive ? 'btn-active' : 'btn-inactive'
                          }}
                        >
                          DEBUG
                        </NavLink>
                      </li>
                    )}
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
                    {/* <li>
                      <NavLink
                        to='/profilesdetails'
                        className={({ isActive }) =>
                          isActive ? 'active' : undefined
                        }
                      >
                        ProfDeTails
                      </NavLink>
                    </li> */}
                  </ul>
                </nav>
              </div>

              <div className='hero-container'>
                <div className='hero__btn-container'>
                  <Link to='/annuaire'>
                    <Button
                      key={`left`}
                      name='Recherche musicien'
                      bgColor={`var(--primary-1)`}
                      shadow={`var(--gray-3)`}
                      icone={imageBtnLeft}
                    ></Button>
                  </Link>

                  <Link to='/annuaire'>
                    <Button
                      key={`right`}
                      name='Recherche groupe'
                      bgColor={`var(--gray-1)`}
                      shadow={`var(--orange-logo)`}
                      icone={imageBtnRight}
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
            <img src={logo} alt='rockYourBand-logo' />
          </div>

          <nav className='navbarre'>
            <ul>
              {isDebugMode && (
                <li>
                  <NavLink
                    to='/graph'
                    className={({ isActive }) => {
                      console.log('accueil', isActive)
                      return isActive ? 'btn-active' : 'btn-inactive'
                    }}
                  >
                    DEBUG
                  </NavLink>
                </li>
              )}
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
            </ul>
          </nav>
        </header>
        // </div>
      )}
    </header>
  )
}
export default Header
