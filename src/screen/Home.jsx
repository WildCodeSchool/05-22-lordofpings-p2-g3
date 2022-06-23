import './Home.css'
import { useEffect } from 'react'

import Section1 from '../components/Section1'
import Section2 from '../components/Section2'

const Home = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(true)
  }, [])

  return (
    <div className='main'>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Home