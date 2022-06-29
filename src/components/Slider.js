import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './Slider.css'
import imggroup1 from '../assets/images/imggroup1.jpg'
import imggroup2 from '../assets/images/imggroup2.jpg'
import imggroup3 from '../assets/images/imggroup3.jpg'

function Slider() {
  // const baseUrl = 'http://react-responsive-carousel.js.org/assets/'
  const datas = [
    {
      id: 1,
      image: 'assets/images/imggroup1.jpg',
      title: 'titre du slider 1',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },

    {
      id: 1,
      image: 'assets/images/imggroup2.jpg',
      title: 'titre du slider 2',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },

    {
      id: 1,
      image: 'assets/images/imggroup4.jpg',
      title: 'titre du slider 3',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    }
  ]
  return (
    <Carousel
      autoPlay
      interval={6000}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={false}
    >
      {datas.map(slide => (
        <div key={slide.id} className='sliderContainer'>
          <img src={require(`../${slide.image}`)} alt='' />

          <h2 className='overlay_title'>{slide.title}</h2>
          <div className='overlay'>
            <div className='slide_text-p'>
              <p className='overlay_text'>{slide.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider