import './Home.css'
import { useEffect } from 'react'

// import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Concept from '../components/Concept'

const Home = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(true)
  }, [])

  return (
    <div className='main'>
      <Concept />
      <Section2 />
    </div>
  )
}

export default Home
