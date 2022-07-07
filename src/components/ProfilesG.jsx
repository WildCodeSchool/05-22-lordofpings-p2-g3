import { Link } from 'react-router-dom'
import './Profiles.css'
import { useNavigate } from 'react-router-dom'

const ProfilesG = ({
  name,
  image,
  id,
  location,
  experience,
  instrument,
  objectif
}) => {
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
            <p>🎓 {experience}</p>
            <p>🎶 {instrument.join(', ')}</p>
            <p>⭐️ {objectif}</p>
          </div>
        </div>
        <div className='flip-box-back text-center'>
          <img src={image} alt={image} className='flip-image' />
          <div className='inner color-white'>
            <h3 className='flip-box-header'>{name}</h3>
            <button
              className='flip-box-button'
              onClick={() => navigate(`/profilesdetailsg/${id}`)}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilesG
