import { Link } from 'react-router-dom'
import './Events.css'
import { useNavigate } from 'react-router-dom'
const Events = ({ name, image, description, id }) => {
  const linkIdEvent = `/evenement/${id}`
  return (
    <>
      <Link to={linkIdEvent}>
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
          <div></div>
        </div>
      </Link>
    </>
  )
}
export default Events
