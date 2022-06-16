import './Home.css'
import {useEffect} from 'react'
import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

import ComposantUn from '../components/StreetMap'
import StreetMap from '../components/StreetMap'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Button from '../components/Button'

const Home = ({setIsHomePage}) => {
  
  
    useEffect(()=>{
   return setIsHomePage(true)
  },[])
  
    return (


    <>
          <Section1 />
          <Section2 />
          {/* <Section1 />
         <Section2 /> */}
    </>
   
    //   {/* <Main className='main'> */}
      
    //   {/* </Main> */}

    //   {/* <Footer className='footer' /> */}
    // </div>
  )
}

export default Home
