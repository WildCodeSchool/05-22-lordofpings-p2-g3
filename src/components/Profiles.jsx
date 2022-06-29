import { Link } from 'react-router-dom'
import './Profiles.css'
import { useNavigate } from 'react-router-dom'
// import Lover from '../assets/images/tom.jpg'
// import Choses from '../assets/images/groupe4.jpg'
// import Knackis from '../assets/images/groupe2.jpg'
// import Riata from '../assets/images/rnbfever.jpg'

const Profiles = ({
  name,
  image,
  id,
  location,
  experience,
  instrument,
  style
}) => {
  let navigate = useNavigate()
  console.log({ name, image, id, location, experience, instrument })
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
        <p>{style}</p>
      </div>
      <button
        className='buttonProfile'
        onClick={() => navigate(`/profilesdetails/${id}`)}
      >
        En savoir plus
      </button>
    </div>
  )
}

export default Profiles
