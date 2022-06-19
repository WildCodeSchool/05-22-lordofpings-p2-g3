import React,{useState, useEffect } from 'react'
import './Profiledetails.css'
import pprofile from '../assets/images/tom.jpg'

const Profiledetails = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <>
      <div className='wrapper'>
        <div className='profile'>
          <div className='profile-detail'>
            <div>
              <img src={pprofile} alt='profile photo' className='pd-image' />
            </div>
            <div className='profile-bio'>
              <h3>
                <span className='colortext'>Nom: Tom </span>
              </h3>
              <h3>
                <span className='colortext'>Prénom: Ah </span>
              </h3>
              <h3>
                <span className='colortext'>Genre: Punk </span>
              </h3>
              <h3>
                <span className='colortext'>Instrument: Triangle </span>
              </h3>
            </div>
          </div>
        </div>
        <div className='profile'>
          <div className='profile-detail'>
            <div className='header-map'>
              <h2>
                <span className='colortext'>Localisation</span>
              </h2>
              {/* <img
                src='http://www.1france.fr/image/carte-plan-departement/28-eure-et-loir.jpg'
                alt='map'
                className='map-image'
              /> */}
              <iframe
                className='map-image'
                id='inlineFrameExample'
                title='Inline Frame Example'
                width='300'
                height='200'
                src='https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606'
              ></iframe>
            </div>
            <div className='profile-bio'>
              <h3>
                <span className='colortext'>Recherche Groupe: Oui</span>
              </h3>
              <h3>
                <span className='colortext'>Objectif: No Futur</span>
              </h3>
              <h3>
                <span className='colortext'>Contact: #WTomF</span>
              </h3>
            </div>
          </div>
        </div>
        <div className='profile'></div>
        <div className='profile-fiche'>
          <h2>
            <span className='colortext'>Fiche descriptive</span>
          </h2>
          <p>
            <span className='colortext'>
              Ipsam vero urbem Byzantiorum fuisse refertissimam atque
              ornatissimam signis quis ignorat? Quae illi, exhausti sumptibus
              bellisque maximis, cum omnis Mithridaticos impetus totumque Pontum
              armatum affervescentem in Asiam atque erumpentem.
            </span>
          </p>
          <div className='profile-ifram'>
            <iframe
              width='630'
              height='250'
              src='https://www.youtube.com/embed/mMFVWgqfO9Q'
              title="Les béruriers noirs - Salut à toi [live à l'Olympia]"
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profiledetails
