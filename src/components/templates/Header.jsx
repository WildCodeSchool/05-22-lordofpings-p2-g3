/* eslint*/
import './Header.css'
import { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/rockYourBand-transparent.png'
import imageBtnLeft from '../../assets/images/musique-de-guitare.png'
import imageBtnRight from '../../assets/images/groupe-musique-2.webp'
import efflogo from '../../assets/sounds/dru10_3.mp3'
import Button from '../../components/Button'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import login from '../../assets/images/login.png'
import profil from '../../assets/images/vincent.png'
import UserContext from '../../contexts/UserContext'
import useSound from 'use-sound'

const DIRECTUS_URL = 'https://yv3o2geh.directus.app'

const userId = 1

const Header = ({
  isHomePage = false,
  isDebugMode = false,
  setSelectGroupe
}) => {
  // const [isHomePage, setIsHomePage] = useState(true);
  const [isActive, setIsActive] = useState()
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [userImg, setUsrImg] = useState()

  let navigate = useNavigate()
  const handleType = (choice, url) => {
    console.log('handleClick')
    setSelectGroupe(choice)
    navigate(url)
  }

  useEffect(() => {
    console.log(`DIRECTUS_URL/assets/${userInfo.avatar}`)
    // userInfo.avatar != null ?
    userInfo.avatar == null
      ? setUsrImg('https://imgur.com/To08fWB.png')
      : setUsrImg(`${DIRECTUS_URL}/assets/${userInfo.avatar}`)
  }, [userInfo])

  let activeStyle = {}

  const [play, { stop }] = useSound(efflogo)

  const handleMouseEnter = () => {
    play()
  }
  const handleMouseLeave = () => {
    stop()
  }

  return (
    <header className='header'>
      {isHomePage && (
        <>
          <div className='home'>
            <video src='/video.mp4' autoPlay loop playsinline muted></video>
            <div className='header__home '>
              <nav className='home__container'>
                <div className='logo'>
                  <Link to='/'>
                    <img
                      src={logo}
                      alt='rockYourBand-logo'
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </Link>
                </div>

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
                    {/* <li>
                        <NavLink
                          to='/about'
                          className={({ isActive }) =>
                            isActive ? 'active' : undefined
                          }
                        >
                          A propos
                        </NavLink>
                      </li> */}
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
                <div className='container__profil '>
                  {userInfo.avatar != '' &&
                    localStorage.getItem('rock-your-band') != null && (
                      <Link to={`/user-profil/${userId}`}>
                        <div className='home__profil'>
                          <img src={userImg} className='home__profil_img' />
                        </div>
                      </Link>
                    )}
                  <Link to='/login'>
                    <button className='header__login '>
                      <p> Login</p>
                    </button>
                  </Link>
                </div>
              </nav>

              <div className='hero-container'>
                <div className='hero__btn-container'>
                  {/* <Link to='/annuaire/musicien'> */}
                  <Button
                    name='Recherche musicien'
                    bgColor={`var(--gray-1)`}
                    shadow={`var(--orange-logo)`}
                    spec={{ choice: false, url: '/annuaire' }}
                    handleType={handleType}
                  ></Button>
                  {/* </Link> */}

                  {/* <Link to='/annuaire/groupe'> */}
                  <Button
                    name='Recherche groupe'
                    bgColor={`var(--gray-1)`}
                    shadow={`var(--orange-logo)`}
                    spec={{ choice: true, url: '/annuaire' }}
                    handleType={handleType}
                  ></Button>
                  {/* </Link> */}
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
        <header className='header-color'>
          <nav className='home__container-2'>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='rockYourBand-logo' />
              </Link>
            </div>

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
                    to='/annuaire/'
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
                {/*  <li>
                  <NavLink
                    to='/about'
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    A propos
                  </NavLink>
                </li> */}
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
            <div className='container__profil '>
              {userInfo.avatar != '' &&
                localStorage.getItem('rock-your-band') != null && (
                  <Link to={`/user-profil/${userId}`}>
                    <div className='home__profil'>
                      <img src={userImg} className='home__profil_img' />
                    </div>
                  </Link>
                )}
              <Link to='/login'>
                <button className='header__login '>
                  <p> Login</p>
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
