import React from 'react'
import './Profiledetails.css'
import pprofile from '../assets/images/tom.jpg'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'

const Profiledetails = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='profile'>
          <div className='profile-detail'>
            <header>
              <img src={pprofile} alt='profile photo' className='pd-image' />
            </header>
            <div className='profile-bio'>
              <h3>
                <span className='colortext'>Nom:</span> Tom
              </h3>
              <h3>
                <span className='colortext'>Prénom:</span> Ah
              </h3>
              <h3>
                <span className='colortext'>Genre:</span> Punk
              </h3>
              <h3>
                <span className='colortext'>Instrument:</span> triangle
              </h3>
            </div>
          </div>
        </div>
        <div className='profile'>
          <div className='profile-detail'>
            <header className='header-map'>
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
            </header>
            <div className='profile-bio'>
              <h3>Recherche Groupe: </h3>
              <h3>Objectif: </h3>
              <h3>Contact: </h3>
            </div>
          </div>
        </div>
        <div className='profile'>
          <div className='profile-fiche'>
            <h2>
              <span className='colortext'>Fiche descriptive</span>
            </h2>
            <p>
              <span className='colortext'>
                Ipsam vero urbem Byzantiorum fuisse refertissimam atque
                ornatissimam signis quis ignorat? Quae illi, exhausti sumptibus
                bellisque maximis, cum omnis Mithridaticos impetus totumque
                Pontum armatum affervescentem in Asiam atque erumpentem.
              </span>
            </p>
          </div>
        </div>
        <div className='profile-ifram'>
          {' '}
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
      <Footer />
    </>
  )
}

export default Profiledetails
