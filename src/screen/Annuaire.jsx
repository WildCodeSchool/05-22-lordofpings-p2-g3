import React, { useEffect } from 'react'
import './Annuaire.css'

const Annuaire = ({setIsHomePage}) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])


  return (
    <div>
    
    
        <h1>Annuaire</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolor.</p>
        <p>Maxime, consequatur quidem quas ipsum doloremque blanditiis laudantium alias nobis!</p>
        <p>Reprehenderit voluptatum dolores impedit fugit dolorem quam est repudiandae autem.</p>
        <p>Corporis quae libero voluptates sint eum adipisci nulla placeat voluptatem.</p>
        <p>At beatae magnam non id! Exercitationem, velit! Porro, tempore dicta!</p>
        <p>Sequi doloremque quasi, sit ab nulla repudiandae quibusdam tempora maiores.</p>
        <p>Officia, magnam! Ex officia eligendi adipisci atque, voluptas dicta quod.</p>
        <p>Illum asperiores praesentium quis voluptatum mollitia esse temporibus doloremque autem!</p>
        <p>Harum nostrum sapiente suscipit numquam. Rem, adipisci assumenda. Nobis, error.</p>
        <p>Enim ullam architecto iusto quibusdam autem, dolorem quis eius distinctio.</p>

   
    </div>
  )
}

export default Annuaire
