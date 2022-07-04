import React from 'react'
import './Equalizer.css'

function Equalizer() {
  window.onload = window.onscroll = function () {
    var bars = document.getElementsByClassName('bar')
    ;[].forEach.call(bars, function (bar) {
      bar.style.height = Math.random() * 100 + '%'
    })
  }

  return (
    <div className='container__equalizer'>
      <div className='all__bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  )
}

export default Equalizer
