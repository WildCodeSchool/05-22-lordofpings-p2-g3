import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProfiledetailsG.css'
import facebookImg from '../assets/images/logoResaux/facebook.png'
import instagramImg from '../assets/images/logoResaux/instagram.png'
import youtubeImg from '../assets/images/logoResaux/youtube.png'
import profile from '../assets/images/tom.jpg'
import LeafletDetails from '../components/LeafletDetails'
import AudioPlayer from '../components/AudioPlayer.jsx'
import audio1 from '../assets/sounds/lofi-study.mp3'
import audio2 from '../assets/sounds/test.mp3'
import audio3 from '../assets/sounds/urban-beat.mp3'

const profiledetailsG = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  const [character, setCharacter] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    fetch(`https://kinotonik.github.io/jsonapi/data_groupe.json`)
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
        <div className='profile-g-wrapper'>
          <div className='profile-g-container'>
            <div className='profile-g-gutter'>
              <div className='profile-g-coninfo'>
                <img
                  src={character[0].jacket}
                  alt='profile-g photo'
                  className='profile-g-image'
                />
              </div>
              <div className='profile-g-info'>
                <div className='profile-g-liens'>
                  <div className='profile-g-social'>
                    <div className='profile-g-name'>
                      <h3>{character[0].name}</h3>
                    </div>
                    <div className='profile-g-resbtn'>
                      <div className='profile-g-reseaux'>
                        <div className='profile-g-resfain'>
                          <a href='https://www.facebook.com/'>
                            <img src={facebookImg} alt='logo facebook'></img>
                          </a>
                        </div>
                        <div className='profile-g-resfain'>
                          <a href='https://www.instagram.com/?hl=fr'>
                            <img src={instagramImg} alt='logo twitter'></img>
                          </a>
                        </div>
                        <div className='profile-g-resyoutub'>
                          <a href='https://www.youtube.com/'>
                            <img src={youtubeImg} alt='logo youtube'></img>
                          </a>
                        </div>
                      </div>
                      <button className='profile-g-totobtn'>
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                  <div className='profile-g-title'>
                    <h4>Description : </h4> <p>{character[0].description} </p>
                  </div>
                  <div className='profile-g-cubes'>
                    <div className='profile-g-cube1'>
                      <h4>Genre : </h4>
                      <h6>{character[0].style} </h6>
                    </div>
                    <div className='profile-g-cube2'>
                      <h4>Instruments: </h4>
                      {character[0].instrument.map(int => (
                        <h6>{`${int}`}</h6>
                      ))}
                    </div>
                    <div className='profile-g-cube3'>
                      <h4>Recherche:</h4>
                      <h6>{character[0].search.instrument}</h6>
                      <h6>{character[0].search.niveau}</h6>
                    </div>
                    <div className='profile-g-cube4'>
                      <h4>Objectif:</h4>
                      <h6>{character[0].search.objectif}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-g-mappor'>
            <div className='profile-g-map'>
              <h2>Localisation : {character[0].location.city}</h2>
              <div>
                <LeafletDetails
                  key={character[0].id}
                  latitude={character[0].location.coordinates.latitude}
                  longitude={character[0].location.coordinates.longitude}
                />
              </div>
            </div>
            {/* <div className='profile-g-WTF'>
              <h4>Playlist: </h4>
              <h6>{character[0].music.lien}</h6>
              <div className='profile-g-contai'>
                <div className='profile-g-contain'>
                  <AudioPlayer
                    className='profile-g-player'
                    url={[audio3]} 
                    title={['urban-beat.mp3']} 
                  />
                  
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    )
  )
}

export default profiledetailsG
