import React from 'react'
import { useEffect, useState } from 'react'
// import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'
import '../components/Profiles.css'

const Annuaire = ({ setIsHomePage }) => {
  // const [isDisplayMap, setIsDisplayMap] = useState(false)
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
        .then(res => res.json())
        .then(res => console.log(res) || setProfiles(res.results))
    }
    getData()
  }, [])

  const [group, setGroup] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch('https://kinotonik.github.io/jsonapi/data_groupe.json')
        .then(res => res.json())
        .then(res => console.log(res) || setGroup(res.results))
    }
    getData()
  }, [])

  return (
    <div className='container-80'>
      <h1>Bienvenue sur le groupe de recherche de musiciens n°1!</h1>
      <Formulaire />
      <div className=''>
        <p>Retrouvez les sur Rock Your Band ... </p>
      </div>
      <div className='clearfix'>
        <div className='row'>
          {profiles.map(
            (profile, index) =>
              index < 3 && (
                <Profiles
                  key={profile.id}
                  name={profile.name.first}
                  image={profile.picture.large}
                  location={profile.location.city}
                />
              )
          )}
          {group.map(
            (group, index) =>
              index < 3 && (
                <Profiles
                  key={group.id}
                  name={group.name}
                  image={group.jacket}
                  location={group.location.city}
                />
              )
          )}
        </div>
      </div>

      {/* <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null} */}
    </div>
  )
}

export default Annuaire
