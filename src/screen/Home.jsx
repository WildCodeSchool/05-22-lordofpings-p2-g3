import './Home.css'
import { useEffect } from 'react'

// import Section1 from '../components/Section1'
import Slider from '../components/Slider'
import Concept from '../components/Concept'

const Home = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(true)
  }, [])

  return (
    <div className='main'>
      <div className='container__section-un'>
        <Concept />
      </div>
      <div className='container__section-deux'>
        <Slider />
      </div>
    </div>
  )
}

export default Home
