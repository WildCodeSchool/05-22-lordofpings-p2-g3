import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Profiledetails.css'
import pprofile from '../assets/images/tom.jpg'
import LeafletDetails from '../components/LeafletDetails'

const Profiledetails = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  const [character, setCharacter] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    fetch(`https://kinotonik.github.io/jsonapi/data_musicien.json`)
      .then(res => res.json())
      .then(
        res =>
          console.log('res[0] :', res[0], 'res :', res) ||
          setCharacter(res.results.filter(profil => profil.id == id))
      )
  }, [])

  return (
    character.length && (
      <>
        {console.log(character)}
        <div className='wrapper'>
          <div className='profile'>
            <div className='profile-detail'>
              <div>
                <img
                  src={character[0].picture.large}
                  alt='profile photo'
                  className='pd-image'
                />
              </div>
              <div className='profile-bio'>
                <h3>
                  <span className='colortext'>
                    Nom: {character[0].name.last}{' '}
                  </span>
                </h3>
                <h3>
                  <span className='colortext'>
                    Prénom: {character[0].name.first}{' '}
                  </span>
                </h3>
                <h3>
                  <span className='colortext'>
                    Genre: {character[0].music.style}{' '}
                  </span>
                </h3>
                <h3>
                  <span className='colortext'>
                    Instrument: {character[0].music.instrument}
                  </span>
                </h3>
                <h3>
                  <span className='colortext'>
                    Expérience: {character[0].music.experience}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-detail'>
              <div className='header-map'>
                <h2>
                  <span className='colortext'>
                    Localisation : {character[0].location.city}
                  </span>
                </h2>
                <div>
                  <LeafletDetails
                    key={character[0].id}
                    latitude={character[0].location.coordinates.latitude}
                    longitude={character[0].location.coordinates.longitude}
                  />
                </div>

                {/* <img
                  src='http://www.1france.fr/image/carte-plan-departement/28-eure-et-loir.jpg'
                  alt='map'
                  className='map-image'
                /> */}
              </div>
              <div className='profile-bio'>
                <h3>
                  <span className='colortext'>Recherche Groupe: Oui</span>
                </h3>
                <h3>
                  <span className='colortext'>Objectif: </span>
                </h3>
                <h3>
                  <span className='colortext'>
                    Contact: {character[0].contact.email}
                  </span>
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
                bellisque maximis, cum omnis Mithridaticos impetus totumque
                Pontum armatum affervescentem in Asiam atque erumpentem.
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
  )
}

export default Profiledetails
