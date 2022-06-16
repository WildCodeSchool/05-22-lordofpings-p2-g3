import React from 'react'
import './Formulaire.css'

const Formulaire = () => {
  return (
    <div className='contener'>
      <form className='form'>
        <div className='contener-1'>
          <label htmlFor='select' className='labelFrom'>
            Recherche Groupe / <br />
            Personne solos :
            <select className='selectForm'>
              <option value='crew'>Groupe</option>
              <option value='solo'>Solo</option>
            </select>
          </label>
          <label htmlFor='select' className='labelFrom'>
            Instruments :
            <select className='selectForm'>
              <option value='guitare'>Guitare</option>
              <option value='basse'>Basse</option>
              <option value='batteur'>Batterie</option>
              <option value='flûte'>Flûte</option>
            </select>
          </label>
        </div>
        <div className='contener-1'>
          <label htmlFor='select' className='labelFrom'>
            Niveau :
            <select className='selectForm'>
              <option value='debutant'>Débutant</option>
              <option value='intermediaire'>Intermediaire</option>
              <option value='avance'>Avancé</option>
            </select>
          </label>
          <label htmlFor='select' className='labelFrom'>
            Objectif recherché :
            <select className='selectForm'>
              <option value='loisir'>Loisir</option>
              <option value='professionnel'>Professionnel</option>
            </select>
          </label>
        </div>
        <div className='contener-1'>
          <label className='labelFrom'>
            Recherche avancée :
            <input type='text' name='' className='selectForm' />
          </label>
          <label className='labelFrom'>
            Genre musical :
            <select className='selectForm'>
              <option value='rock'>Rock</option>
              <option value='classic'>Classic</option>
            </select>
          </label>
        </div>
        <label className='locForm'>
          Localisation :
          <input type='text' name='' className='selectForm' />
        </label>
        <button className='buttonForm'>Recherche</button>
      </form>
    </div>
  )
}

export default Formulaire
