import './Header.css'
import logo from '../../assets/images/rockYourBand-transparent.png'
import useSound from 'use-sound'
import mySound from '../../assets/sounds/urban-beat-20679.mp3'

const Header = () => {
  const [playSound] = useSound(mySound, { volume: 0.5 }) // 70% of the original volume
  const [stopSound] = useSound(mySound, { volume: 0.0 }) // 70% of the original volume

  const handleClick = () => {
    playSound()
    console.log('mouse hover')
    // maybe you want to add other things here?
  }

  const stop = () => {
    console.log('mouse quit')
    stopSound()
  }

  return (
    <header className='header d-flex justify-content-center p-20'>
      <img
        className='logo'
        src={logo}
        onMouseLeave={() => stop()}
        onMouseEnter={() => handleClick()}
      />

      <h1> 🎤 🎧 🎼 🎹 🎷 ROCK YOUR BAND 🎺 🎸 🎻</h1>
    </header>
  )
}
export default Header
