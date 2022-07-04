import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Events from '../components/Events'

const EventDetails = ({ setIsHomePage }) => {
  const [EventDetails, setEventDetails] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  useEffect(() => {
    fetch(`https://yv3o2geh.directus.app/items/evenements/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log('res[0] :', res.data, 'res :', res.data) ||
          setEventDetails(res.data)
      })
  }, [])
  const { name, image, date_start, date_end, description, localisation } =
    EventDetails
  return (
    <div>
      blablalol
      <h2>{name}</h2>
      {/* <div>
        <img src={image} alt={name} />
      </div>
      <div>{image}</div>
      <div>{date_start}</div>
      <div>{date_end}</div>
      <div>{image}</div>
      <div>{description}</div>
      <div>{localisation}</div> */}
    </div>
  )
}
export default EventDetails
