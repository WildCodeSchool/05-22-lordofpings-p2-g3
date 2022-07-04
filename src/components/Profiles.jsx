import { Link } from 'react-router-dom'
import './Profiles.css'
import { useNavigate } from 'react-router-dom'

const Profiles = ({ name, image, id, location, experience, instrument }) => {
  let navigate = useNavigate()
  //console.log({ name, image, id, location, experience, instrument })
  return (
    <div className='box-item'>
      <div className='flip-box'>
        <div className='flip-box-front text-center'>
          <img src={image} alt={name} className='flip-image' />
          <div className='inner color-white'>
            <h3 className='flip-box-header'>{name}</h3>
            <p>📍 {location}</p>
            <p>⭐️ {experience}</p>
            <p>🎶 {instrument.join(', ')}</p>
          </div>
        </div>
        <div className='flip-box-back text-center'>
          <img src={image} alt={image} className='flip-image' />
          <div className='inner color-white'>
            <h3 className='flip-box-header'>{name}</h3>
            <p>A short sentence describing this callout is.</p>
            <button
              className='flip-box-button'
              onClick={() => navigate(`/profilesdetails/${id}`)}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
