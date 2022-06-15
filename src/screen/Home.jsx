import './Home.css'
import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

import ComposantUn from '../components/StreetMap'
import StreetMap from '../components/StreetMap'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='home'>
      <div className='header__home '>
        <Header className='' />
        <div className='hero-container'>
          <div className='hero__btn-container'>
            <Button name='Cherche zicos' reverse={false}></Button>
            <Button name='Cherche groupe' reverse={true}></Button>
          </div>
          <div className='hero-vp'>
            <h1>Rock your Band</h1>
            <h2>
              Link <span>connection</span> with other musician is{' '}
              <span>easy</span>{' '}
            </h2>
          </div>
        </div>
      </div>

      <Main className=''>
        <Section1 />
        <Section2 />
      </Main>

      <Footer className='footer' />
    </div>
  )
}

export default Home
