/* eslint*/

import './Header.css'
import logo from '../../assets/images/rockYourBand-transparent.png'
import { Link } from 'react-router-dom'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

const Header = () => {
  return (
    <header className='header p-20'>
      <div className='logo'>
        <img src={logo} alt='rockYourBand-logo' />
      </div>

      <nav className='navbarre'>
        <ul>
          <li>
            <a className='active'>Annuaire</a>
          </li>
          <li>
            <a>Evenement</a>
          </li>
          <li>
            <a>A propos</a>
          </li>
        </ul>
        <Link to={'/profiledetails'}> ProfilD</Link>
      </nav>
    </header>
  )
}
export default Header
