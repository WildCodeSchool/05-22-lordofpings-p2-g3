import './Header.css'
import logo from '../../assets/images/rockYourBand-transparent.png';

const Header = () => {

    return (
    <header className="header d-flex justify-content-center p-20">   
          
                <img className="logo" src={logo} />
       
            
            <h1> 🎤 🎧 🎼 🎹 🎷 ROCK YOUR BAND  🎺 🎸 🎻</h1>
    </header>
    )      
}
 export default Header