import './Header.css'
import logo from '../../assets/images/rockYourBand-transparent.png';
import useSound from 'use-sound'
import mySound from '../../assets/sounds/urban-beat-20679.mp3';

const Header = () => {


    return (
    <header className="header d-flex justify-content-center p-20">   
   
        <div className="logo">
            <img src="" alt="rockYourBand-logo" />  
        </div>

        <nav className="">
            <ul>
                <li><Link>Annuaire</Link></li>
                    <li><Link>Evenement</Link></li>
                    <li><Link>A propos</Link></li>
            </ul>
        </nav>
    </header>
    )      
}
 export default Header
