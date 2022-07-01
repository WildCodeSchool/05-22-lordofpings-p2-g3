import React, { useEffect, useState } from 'react'

import AudioPlayer from '../components/AudioPlayer'
import audio1 from '../assets/sounds/test.mp3'
//import audio2 from '../assets/sounds/urban-beat-20679.mp3'
import './Apropos.css'
import { Link } from 'react-router-dom'
let audio2 = ''
const Apropos = ({ setIsHomePage }) => {
  const [isactive, setIsactive] = useState(false)

  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  const handleClick = () => {
    setIsactive(!isactive)
  }
  return (
    <div className=''>
      <div>
        <h1>A propos</h1>
        <div className='wrapper-apropos'>
          <div className='container-apropos'>
            <div className='banner-apropos'></div>
            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg'
              alt='profile'
            />
            <h1 className='name-apropos'>name1</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>

          <div className='container-apropos'>
            <div className='banner-apropos'></div>
            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg'
              alt='profile'
            />
            <h1 className='name-apropos'>name2</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>

          <div className='container-apropos'>
            <div className='banner-apropos'></div>
            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg'
              alt='profile'
            />
            <h1 className='name-apropos'>name3</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>

          <div className='container-apropos'>
            <div className='banner-apropos'></div>
            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg'
              alt='profile'
            />
            <h1 className='name-apropos'>name4</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>

          <div className='container-apropos'>
            <div className='banner-apropos'></div>
            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?'
              alt='profile'
            />
            <h1 className='name-apropos'>name5</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>

          <div className='container-apropos'>
            <div className='banner-apropos'>
              <div className='ocean'>
                <div className='wave'></div>
                <div className='wave'></div>
              </div>
            </div>

            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg'
              alt='profile'
            />
            <h1 className='name-apropos'>name6</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>

          <div className='container-apropos'>
            <div className='banner-apropos'></div>
            <img
              className='img-apropos'
              src='https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg'
              alt='profile'
            />
            <h1 className='name-apropos'>name7</h1>
            <p className='description-apropos'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              in, perferendis veniam fuga mollitia rem nisi laboriosam tenetur
              quaerat exercitationem ipsa repellat saepe possimus expedita
              maxime, modi culpa. Eveniet, mollitia?
            </p>
            <button className='btn-apropos'>Ma musique</button>
          </div>
        </div>
      </div>
      <div>
        <div className='about__container' />
        <h2>Mon Player</h2>

        <AudioPlayer
          onClick={handleClick}
          className={`about__container-player  ${
            isactive ? 'rotate' : 'notRotate'
          }`}
          url={audio2}
        />

        <Link to='/graph'>graql</Link>
      </div>
    </div>
  )
}

export default Apropos
