import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './Slider.css'
function Slider() {
  return (
    <Carousel>
      <div>Slider 1</div>
      <div>Slider 2</div>
      <div>Slider 3</div>
    </Carousel>
  )
}

export default Slider
