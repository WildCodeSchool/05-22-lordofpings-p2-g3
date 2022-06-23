import { Link } from 'react-router-dom'
import './Profiles.css'
// import Lover from '../assets/images/tom.jpg'
// import Choses from '../assets/images/groupe4.jpg'
// import Knackis from '../assets/images/groupe2.jpg'
// import Riata from '../assets/images/rnbfever.jpg'

const Profiles = ({ name, image, id, location, experience, instrument }) => {
  const linkIdProfiles = `/profiledetails/${id}`
  return (
    <div className='card'>
      <div className='align'>
        <img src={image} alt={name} />
      </div>
      <div className='details'>
        <h2 className='name'>{name}</h2>
        <p>📍 {location}</p>
        <p>⭐️ {experience}</p>
        <p>🎶 {instrument.join(', ')}</p>
      </div>
      <button className='buttonProfile' onClick={linkIdProfiles}>
        En savoir plus
      </button>
    </div>
  )
}

export default Profiles
