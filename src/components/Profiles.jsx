import { Link } from 'react-router-dom'
import './Profiles.css'
// import Lover from '../assets/images/tom.jpg'
// import Choses from '../assets/images/groupe4.jpg'
// import Knackis from '../assets/images/groupe2.jpg'
// import Riata from '../assets/images/rnbfever.jpg'

const Profiles = ({ name, image, id, location }) => {
  const linkIdProfiles = `/characters/${id}`
  return (
    <Link to={linkIdProfiles}>
      <div className='card' style={{ transitionDelay: { id } }}>
        <div className='content'>
          <div className='img'>
            <img src={image} alt={name} />
          </div>
          <div className='details'>
            <span className='name'>{name}</span>
            <p>{location}</p>
          </div>
        </div>
        <a href='#'>En savoir plus</a>
      </div>
    </Link>
  )
}

export default Profiles
