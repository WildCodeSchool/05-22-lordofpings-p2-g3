import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'
import { useParams } from 'react-router-dom'
import Musicien from '../components/Musicien'
import Groupe from '../components/Groupe'

const Annuaire = ({ setIsHomePage, setIsGroupe }) => {
  const [profiles, setProfiles] = useState([])
  const [displayMOrG, setDisplayMOrG] = useState('')
  const [profilesFilter, setProfilesFilter] = useState([])
  const [groupes, setGroupes] = useState([])
  const [groupesFilter, setGroupesFilter] = useState([])
  const [noResult, setNoResult] = useState(false)
  const [noCreteria, setNoCreteria] = useState(true)
  const [creteria, setCreteria] = useState({
    instrument: '',
    experience: '',
    style: '',
    location: '',
    objectif: ''
  })

  const { setGroupe } = useParams()
  //console.log('GROUPE TEST', paramsGroupe)
  useEffect(() => {
    setGroupe == 'musicien'
      ? setCreteria({ ...creteria, gs: 'false' })
      : setCreteria({ ...creteria, gs: 'true' })
  }, [setGroupe])

  const filter1 = (arr, strCompare) => {
    return arr.filter(el => el.music.instrument?.includes(strCompare))
  }

  const filter2 = (arr, strCompare) => {
    return arr.filter(el => el.music.style?.includes(strCompare))
  }

  const filter3 = (arr, strCompare) => {
    return arr.filter(el => el.music.experience?.includes(strCompare))
  }

  const filter4 = (arr, strCompare) => {
    return arr.filter(el => el.location.city?.includes(strCompare))
  }

  const filter5 = (arr, strCompare) => {
    return arr.filter(el => el.music.search.objectif?.includes(strCompare))
  }

  const filterG1 = (arr, strCompareG) => {
    return arr.filter(el => el.instrument?.includes(strCompareG))
  }
  const filterG2 = (arr, strCompareG) => {
    return arr.filter(el => el.style?.includes(strCompareG))
  }

  const filterG3 = (arr, strCompareG) => {
    return arr.filter(el => el.experience?.includes(strCompareG))
  }

  const filterG4 = (arr, strCompareG) => {
    return arr.filter(el => el.location?.includes(strCompareG))
  }

  const filterG5 = (arr, strCompareG) => {
    return arr.filter(el => el.search.objectif?.includes(strCompareG))
  }

  useEffect(() => {
    setIsHomePage(false)
  }, [])

  useEffect(() => {
    setIsGroupe(true)
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
        .then(res => setGroupes(res.results))
    }
    getData()
  }, [])

  const checkCreteria = (e, creteria, noCreteria) => {
    e.preventDefault()

    let result = profiles
    result = creteria.instrument ? filter1(result, creteria.instrument) : result
    result = creteria.style ? filter2(result, creteria.style) : result
    result = creteria.experience ? filter3(result, creteria.experience) : result
    result = creteria.location ? filter4(result, creteria.location) : result
    result = creteria.objectif ? filter5(result, creteria.objectif) : result
    setCreteria(creteria)
    setProfilesFilter(result)
    setNoCreteria(noCreteria)
    setNoResult(true)

    let resultG = groupes
    resultG = creteria.instrument
      ? filterG1(resultG, creteria.instrument)
      : resultG
    resultG = creteria.style ? filterG2(resultG, creteria.style) : resultG
    resultG = creteria.experience
      ? filterG3(resultG, creteria.experience)
      : resultG
    resultG = creteria.location ? filterG4(resultG, creteria.location) : resultG
    resultG = creteria.objectif ? filterG5(resultG, creteria.objectif) : resultG
    setCreteria(creteria)
    setGroupesFilter(resultG)
    setNoCreteria(noCreteria)
    setNoResult(true)
  }

  return (
    <>
      <div className='container-80'>
        <div className='titleForm1'>
          <h1>Bienvenue sur le groupe de recherche de musiciens n°1 !</h1>
        </div>
        <Formulaire isCheck={checkCreteria} />
        <div className='titleCard'>
          <h3>Retrouvez vos futurs musiciens sur Rock Your Band ... </h3>
        </div>

        <Musicien
          noCreteria={noCreteria}
          profilesFilter={profilesFilter}
          noResult={noResult}
          profiles={profiles}
          creteria={creteria}
        />

        <Groupe
          noCreteria={noCreteria}
          groupesFilter={groupesFilter}
          noResult={noResult}
          groupes={groupes}
          creteria={creteria}
        />
      </div>
    </>
  )
}

export default Annuaire
