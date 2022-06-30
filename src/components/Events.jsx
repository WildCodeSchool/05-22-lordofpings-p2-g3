import { Link } from 'react-router-dom'
import './Events.css'

const Events = ({ name, image, description, id }) => {
  const linkIdEvent = `/evenement/${id}`
  const imgUrl = `https://yv3o2geh.directus.app/assets/${image}`
  return (
    <>
      <Link to={linkIdEvent}>
        <div className='eventBody'>
          <div className='eventTitle'>
            <p>{name}</p>
          </div>
          <div className='eventImage'>
            <img src={imgUrl} alt={name} className='cardEventImg' />
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
