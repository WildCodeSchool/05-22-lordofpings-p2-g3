import { Link } from 'react-router-dom'
import './Events.css'
import { useNavigate } from 'react-router-dom'

const Events = ({ name, image, description, id }) => {
  let navigate = useNavigate()
  return (
    <>
      <div className='eventBody'>
        <div className='eventTitle'>
          <p>{name}</p>
        </div>
        <div className='eventImage'>
          <img src={image} alt={name} className='cardEventImg' />
        </div>
        <div className='eventDescription'>
          <p>{description}</p>
        </div>
        <button
          className='moreEvent'
          onClick={() => navigate(`/evenement/${id}`)}
        >
          En savoir plus
        </button>
      </div>
    </>
  )
}
export default Events
