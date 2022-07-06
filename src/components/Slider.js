import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './Slider.css'
// import imggroup1 from '../assets/images/imggroup1.jpg'
// import imggroup2 from '../assets/images/imggroup2.jpg'
// import imggroup3 from '../assets/images/imggroup3.jpg'
import { useState, useEffect } from 'react'

function Slider() {
  const imgUrl = `https://yv3o2geh.directus.app/assets`
  const [evenements, setEvenements] = useState([])
  const [randomEvent, setrandomEvent] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const getData = () => {
      fetch('https://yv3o2geh.directus.app/items/evenements/')
        .then(res => res.json())
        .then(res => {
          console.log(res) || setEvenements(res.data)
          setrandomEvent(randomArr(res.data))
        })
    }
    getData()
  }, [])

  const randomArr = data => {
    let array = []
    while (array.length < 10) {
      const pushEvent = Math.floor(Math.random() * data.length + 1)
      !array.includes(pushEvent) && array.push(pushEvent)
    }
    return array
  }

  // const baseUrl = 'http://react-responsive-carousel.js.org/assets/'
  // const datas = [
  //   {
  //     id: 1,
  //     image: 'assets/images/imggroup1.jpg',
  //     title: 'titre du slider 1',
  //     text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  //   },

  //   {
  //     id: 1,
  //     image: 'assets/images/imggroup2.jpg',
  //     title: 'titre du slider 2',
  //     text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  //   },

  //   {
  //     id: 1,
  //     image: 'assets/images/imggroup4.jpg',
  //     title: 'titre du slider 3',
  //     text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  //   }
  // ]
  return (
    <Carousel
      autoPlay
      interval={6000}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={false}
    >
      {evenements
        .filter((slide, index) => {
          // return slide.id.match(randomEvent.join(''))
          return (
            slide.id === randomEvent[0] ||
            slide.id === randomEvent[1] ||
            slide.id === randomEvent[2] ||
            slide.id === randomEvent[3] ||
            slide.id === randomEvent[4] ||
            slide.id === randomEvent[5] ||
            slide.id === randomEvent[6] ||
            slide.id === randomEvent[7] ||
            slide.id === randomEvent[8] ||
            slide.id === randomEvent[9]
          )
        })
        .map((slide, index) => (
          //  {return slide.id.includes[4,5,6]})
          //  slide.map(slide =>

          <div key={slide.id} className='sliderContainer'>
            <img src={`${imgUrl}/${slide.image}`} alt={name} />
            <h2 className='overlay_title'>{slide.name}</h2>
            <div className='overlay'>
              <div className='slide_text-p'>
                <p className='overlay_text'>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  )
}

export default Slider
