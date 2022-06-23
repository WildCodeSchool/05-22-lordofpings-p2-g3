import { Link } from 'react-router-dom'
import './Event.css'

const Event = ({ name, image, id }) => {
  const linkIdEvent = `/evenement/${id}`
  return (
    <div>
      <Link to={linkIdEvent}>
        <p>{name}</p>
        <img src={image} alt={name} className='cardEventImg' />
      </Link>
    </div>
  )
}
export default Event
