import { Link } from 'react-router-dom'
import './Events.css'
import { useNavigate } from 'react-router-dom'
const Events = ({
  name,
  image,
  description,
  id,
  url,
  location,
  tarif,
  style
}) => {
  // const linkIdEvent = `/evenement/${id}`
  let navigate = useNavigate()
  const imgUrl = `https://yv3o2geh.directus.app/assets/${image}`

  return (
    <div className='eventBody'>
      <div className='event-flip-box'>
        <div className='event-flip-box-front text-center'>
          <img src={imgUrl} alt={name} className='event-flip-image' />
          <div className='inner event-color-white'>
            <h3 className='event-flip-box-header'>{name}</h3>
            <p className='description-event'>{description}</p>
          </div>
        </div>
        <div className='event-flip-box-back text-center'>
          <img src={imgUrl} alt={image} className='event-flip-image' />
          <div className='inner event-color-white'>
            <h3 className='event-flip-box-header'>{name}</h3>
            <p>💰 {tarif}</p>
            <p>🎶 {style.join(', ')}</p>
            <button
              className='event-flip-box-button'
              onClick={() => navigate({ url })}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Events
