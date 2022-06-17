/* eslint*/
import { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/rockYourBand-transparent.png'
import imageBtnLeft from '../../assets/images/musique-de-guitare.png'
import imageBtnRight from '../../assets/images/groupe-musique-2.webp'

import Button from '../../components/Button'
import { NavLink } from 'react-router-dom'

const Header = ({ isHomePage = false }) => {
  // const [isHomePage, setIsHomePage] = useState(true);
  const [isActive, setIsActive] = useState()

  let activeStyle = {}

  return (
    <header className=''>
      {isHomePage && (
        <>
          <div className='home'>
            <div className='header__home '>
              <header className='header p-20'>
                <div className='logo'>
                  <img src={logo} alt='rockYourBand-logo' />
                </div>

                <nav className='navbarre'>
                  <ul>
                    <li>
                      {/* navlink ici */}
                      <NavLink
                        to='/'
                        className={({ isActive }) =>
                          isActive ? 'active' : undefined
                        }
                      >
                        Accueil
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/annuaire'
                        className={({ isActive }) =>
                          isActive ? 'active' : undefined
                        }
                      >
                        Annuaire
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/evenement'
                        className={({ isActive }) =>
                          isActive ? 'active' : undefined
                        }
                      >
                        évenements
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
              </header>

              <div className='hero-container'>
                <div className='hero__btn-container'>
                  <Button
                    key={`left`}
                    name='Recherche musicien'
                    bgColor={`var(--primary-1)`}
                    shadow={`var(--gray-3)`}
                    icone={imageBtnLeft}
                  ></Button>
                  <Button
                    key={`right`}
                    name='Recherche groupe'
                    bgColor={`var(--gray-1)`}
                    shadow={`var(--orange-logo)`}
                    icone={imageBtnRight}
                  ></Button>
                </div>
                <div className='hero-vp'>
                  <h1>Rock your Band</h1>
                  <h2>
                    <span>connection</span> with other musician is{' '}
                    <span>easy</span>{' '}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!isHomePage && (
        <div className='nothome'>
          <header className='header-color  p-20'>
            <div className='logo'>
              <img src={logo} alt='rockYourBand-logo' />
            </div>

            <nav className='navbarre'>
              <ul>
                <li>
                  {/* navlink ici */}
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/annuaire'
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    Annuaire
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/evenement'
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    évenements
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
          </header>
        </div>
      )}
    </header>
  )
}
export default Header
