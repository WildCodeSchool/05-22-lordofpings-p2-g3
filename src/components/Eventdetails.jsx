import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Events from './Events'

const EventDetails = () => {
  const [EventDetails, setEventDetails] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetch(
      `https://gist.githubusercontent.com/Joshua35260/570274df963631defeac775a4ce472d3/raw/eee1a92e9baa6a36a3a4df3d9cb4f95e01091b83/data.json`
    )
      .then(res => res.json())
      .then(
        res =>
          console.log('res[0] :', res[0], 'res :', res) ||
          setEventDetails(res.filter(event => event.id == id))
      )
  }, [])
  const { name, image, date_start, date_end, description, localisation } =
    EventDetails
  return (
    event.length && (
      <div>
        <h2>{name}</h2>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>{image}</div>
        <div>{date_start}</div>
        <div>{date_end}</div>
        <div>{image}</div>
        <div>{description}</div>
        <div>{localisation}</div>
      </div>
    )
  )
}

export default EventDetails
