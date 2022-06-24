import React from 'react'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'

const Annuaire = ({ setIsHomePage }) => {
  const [group, setGroup] = useState([])
  const [profiles, setProfiles] = useState([])
  const [displayMOrG, setDisplayMOrG] = useState('') // etape 1
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  useEffect(() => {
    const getData = () => {
      fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
        .then(res => res.json())
        .then(res => console.log(res) || setProfiles(res.results))
    }
    getData()
  }, [])

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
      {/* etape 2 passage de la porps au formulaire */}
      <Formulaire setDisplayMOrG={setDisplayMOrG} />
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
        <div>
          {/* étape 3 passage de la state à la carte */}
          <Leaflet displayMOrG={displayMOrG} />
        </div>
      </div>
    </div>
  )
}

export default Annuaire
