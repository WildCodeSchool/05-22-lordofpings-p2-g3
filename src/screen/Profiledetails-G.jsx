import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Profiledetails.css'
import facebookImg from '../assets/images/logoResaux/facebook.png'
import instagramImg from '../assets/images/logoResaux/instagram.png'
import youtubeImg from '../assets/images/logoResaux/youtube.png'
import pprofile from '../assets/images/tom.jpg'
import LeafletDetails from '../components/LeafletDetails'
import AudioPlayer from '../components/AudioPlayer.jsx'
import audio1 from '../assets/sounds/lofi-study.mp3'
import audio2 from '../assets/sounds/test.mp3'
import audio3 from '../assets/sounds/urban-beat.mp3'

const Profiledetails = ({ setIsHomePage }) => {
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
        <div className='profile-wrapper'>
          <div className='profile-container'>
            <div className='profile-gutter'>
              <div className='profile-coninfo'>
                <img
                  src={character[0].picture.medium}
                  alt='profile photo'
                  className='profile-image'
                />
              </div>
              <div className='profile-info'>
                <div className='profile-liens'>
                  <div className='profile-social'>
                    <div className='profile-name'>
                      <h3>
                        {character[0].name.last} {character[0].name.first}
                      </h3>
                      <h4>{character[0].age}ans </h4>
                    </div>
                    <div className='profile-resbtn'>
                      <div className='profile-reseaux'>
                        <div className='profile-resfain'>
                          <a href='https://www.facebook.com/'>
                            <img src={facebookImg} alt='logo facebook'></img>
                          </a>
                        </div>
                        <div className='profile-resfain'>
                          <a href='https://www.instagram.com/?hl=fr'>
                            <img src={instagramImg} alt='logo twitter'></img>
                          </a>
                        </div>
                        <div className='profile-resyoutub'>
                          <a href='https://www.youtube.com/'>
                            <img src={youtubeImg} alt='logo youtube'></img>
                          </a>
                        </div>
                      </div>
                      <button className='profile-totobtn'>
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                  <div className='profile-title'>
                    <h4>Description : </h4>{' '}
                    <p>{character[0].music.description} </p>
                  </div>
                  <div className='profile-cubes'>
                    <div className='profile-cube1'>
                      <h4>Genre : </h4>
                      <h6>{character[0].music.style} </h6>
                    </div>
                    <div className='profile-cube2'>
                      <h4>Instrument: </h4>
                      <h6>{character[0].music.instrument}</h6>
                    </div>
                    <div className='profile-cube3'>
                      <h4>Recherche:</h4>
                      <h6>{character[0].music.search.type}</h6>
                      <h6>{character[0].music.search.niveau}</h6>
                    </div>
                    <div className='profile-cube4'>
                      <h4>Objectif:</h4>
                      <h6>{character[0].music.search.objectif}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-mappor'>
            <div className='profile-map'>
              <h2>Localisation : {character[0].location.city}</h2>
              <div>
                <LeafletDetails
                  key={character[0].id}
                  latitude={character[0].location.coordinates.latitude}
                  longitude={character[0].location.coordinates.longitude}
                />
              </div>
            </div>
            <div className='profile-WTF'>
              <h4>Playlist: </h4>
              <h6>{character[0].music.lien}</h6>
              <div className='profile-contai'>
                <div className='profile-contain'>
                  <AudioPlayer
                    className='profile-player'
                    url={[audio3]} /*div playstop*/
                    title={['urban-beat.mp3']} /*div title*/
                  />
                  {/* <i className='fas fa-play'></i> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default Profiledetails
