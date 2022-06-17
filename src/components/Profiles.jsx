import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Profiles.css'
import Lover from '../assets/images/tom.jpg'
import Choses from '../assets/images/groupe4.jpg'
import Knackis from '../assets/images/groupe2.jpg'
import Riata from '../assets/images/rnbfever.jpg'

const Profiles = () => {
  return (
    <div>
      <div id='hosting'>
        <div className='marseille'>
          <div className='container'>
            <div className='hosting-list'>
              <a href='/profilesdetails'>
                <div>
                  <img src={Lover} alt='Jean Figue' />
                  <div className='div-content'>
                    <h3>Ah</h3>
                    <p>Bordeaux</p>
                    <p>Solo</p>
                    <p>Triangle</p>
                    <p>Punk</p>
                  </div>
                </div>
              </a>
              <a href='//profilesdetails'>
                <div>
                  <img src={Choses} alt='Les Choses' />
                  <div className='div-content'>
                    <h3>Les Choses</h3>
                    <p>Paris</p>
                    <p>Groupe</p>
                    <p>Guitare - Basse - Batterie - Chant</p>
                    <p>Rock Fusion</p>
                  </div>
                </div>
              </a>
              <a href='/profilesdetails'>
                <div>
                  <img src={Knackis} alt='Burned Knackis' />
                  <div className='div-content'>
                    <h3>Burned Knackis</h3>
                    <p>Nantes</p>
                    <p>Groupe</p>
                    <p>Guitare - Chant</p>
                    <p>Grunge</p>
                  </div>
                </div>
              </a>
              <a href='/profilesdetails'>
                <div>
                  <img src={Riata} alt='Riata' />
                  <div className='div-content'>
                    <h3>Riata</h3>
                    <p>Perpignan</p>
                    <p>Solo</p>
                    <p>Chant</p>
                    <p>RnB</p>
                  </div>
                </div>
              </a>
            </div>
            <span className='subtitle'>
              <a href='#'>Afficher plus</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profiles
