import React from 'react'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'

const Annuaire = ({ setIsHomePage }) => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)
  const [profiles, setProfiles] = useState([])
  const [group, setGroup] = useState([])
  const [dataCreteria, setDataCreteria] = useState('Tours')
  const [instCreteria, setInstCriteria] = useState('Piano')
  const [nivCreteria, setNivCreteria] = useState('débutant')
  const [styleCreteria, setStyleCreteria] = useState('Jazz')

  useEffect(() => {
    setIsHomePage(false)
  }, [])

  useEffect(() => {
    const getData = () => {
      fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
        .then(res => res.json())
        .then(res => setProfiles(res.results))
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

  const checkCreteria = (
    e,
    instCreteria,
    nivCreteria,
    styleCreteria,
    dataCreteria
  ) => {
    e.preventDefault()
    console.log(
      'appel annuaire',
      instCreteria,
      nivCreteria,
      styleCreteria,
      dataCreteria
    )
    setInstCriteria(instCreteria)
    setNivCreteria(nivCreteria)
    setStyleCreteria(styleCreteria)
    setDataCreteria(dataCreteria)
  }

  return (
    <div className='container-80'>
      <h1>Bienvenue sur le groupe de recherche de musiciens n°1!</h1>
      <Formulaire />
      <div className='title1'>
        <h3>Retrouvez vos futurs musiciens sur Rock Your Band ... </h3>
      </div>
      <div className='containerSolo'>
        {profiles.map(
          (profile, index) =>
            index < 10 && (
              <div className='containerSolo'>
                <Profiles
                  key={profile.id}
                  id={profile.id}
                  name={profile.name.first}
                  image={profile.picture.large}
                  location={profile.location.city}
                  instrument={profile.music.instrument}
                  experience={profile.music.expérience}
                />
              </div>
            )
        )}
      </div>
      <div className='title2'>
        <h3>Ou votre futur groupe de musique ... </h3>
      </div>
      <div className='containerGroupe'>
        {group.map(
          (group, index) =>
            index < 10 &&
            (console.log('groupe', group) || (
              <div className='containerGroupe'>
                <Profiles
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  image={group.jacket}
                  location={group.location.city}
                  instrument={group.instrument}
                  experience={group.expérience}
                />
              </div>
            ))
        )}
      </div>
      <div>
        <Leaflet />
      </div>
    </div>
  )
}

export default Annuaire
