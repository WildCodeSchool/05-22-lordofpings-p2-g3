import React from 'react'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'
import '../components/Profiles.css'

const Annuaire = ({ setIsHomePage }) => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)
  const [profiles, setProfiles] = useState([])
  const [group, setGroup] = useState([])
  const [dataCriteria, setDataCriteria] = useState('Tours')
  const [instCriteria, setInstCriteria] = useState('Piano')
  const [nivCriteria, setNivCriteria] = useState('débutant')
  const [styleCriteria, setStyleCriteria] = useState('Jazz')

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

  // useEffect(() => {
  //   const getData = () => {
  //     fetch('https://kinotonik.github.io/jsonapi/data_groupe.json')
  //       .then(res => res.json())
  //       .then(res => console.log(res) || setGroup(res.results))
  //   }
  //   getData()
  // }, [])

  const checkCreteria = (
    e,
    instCriteria,
    nivCriteria,
    styleCriteria,
    dataCriteria
  ) => {
    e.preventDefault()
    console.log(
      'appel annuaire',
      instCriteria,
      nivCriteria,
      styleCriteria,
      dataCriteria
    )
    setInstCriteria(instCriteria)
    setNivCriteria(nivCriteria)
    setStyleCriteria(styleCriteria)
    setDataCriteria(dataCriteria)
  }

  return (
    <div className='container-80'>
      <h1>Bienvenue sur le groupe de recherche de musiciens n°1!</h1>
      <Formulaire isCheck={checkCreteria} />
      <Leaflet />
      <div className=''>
        <p>Retrouvez les sur Rock Your Band ... </p>
      </div>
      <div className='clearfix'>
        <div className='row'>
          {profiles !== null &&
            profiles /* la ça affiche les profiles en dessous de la map mais juste un en savoir plus pas profiles entier  */
              .filter(profileFiltre => {
                // console.log('0', profileFiltre)
                // console.log('1', profileFiltre.style, styleCriteria)
                // console.log('2', profileFiltre.style.includes(styleCriteria))
                return profileFiltre.location.city.includes(dataCriteria)
              })
              .map(profilesRes => <Profiles key={profilesRes.id} />)}

          {/* {profiles.map(
            (profile, index) =>
              index < 3 && (
                <Profiles
                  key={profile.id}
                  name={profile.name.first}
                  image={profile.picture.large}
                  location={profile.location.city}
                />
              )
          )} */}
          {/* {group.map(
            (group, index) =>
              index < 3 && (
                <Profiles
                  key={group.id}
                  name={group.name}
                  image={group.jacket}
                  location={group.location.city}
                />
              )
          )}  */}
        </div>
      </div>

      {/* <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null} */}
    </div>
  )
}

export default Annuaire
