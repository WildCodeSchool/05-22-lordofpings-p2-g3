import React from 'react'
import './Concept.css'

function Concept() {
  let elements,
    newContent = ''

  // on stock tous les objets du DOM ayant la className=''et "split-character" dans un tableau "elements"

  elements = document.getElementsByClassName('msg')

  // pour chaque objet du DOM ayant la className=''e "split-character"

  for (let element = 0; element < elements.length; ++element) {
    // on initialise la letiable qui va contenir le nouveau contenu en ouvrant le span qui contiendra le premier mot

    newContent += '<span>'

    // pour chaque caractère existant dans cet objet

    for (
      let character = 0;
      character < elements[element].innerText.length;
      character++
    ) {
      // si c'est un caractère on le met dans un span

      if (elements[element].innerText[character] !== ' ') {
        // Pour que chaque lettre apparaisse après l'autre, on ajoute un délai de 35 millisecondes entre chacune d'elle.

        newContent +=
          "<span style='animation-delay: " +
          0.035 * character +
          "s'>" +
          elements[element].innerText[character] +
          '</span>'
      }

      // si c'est un espace vide c'est la fin d'un mot, on ferme le span qui englobe ce mot et on ouvre le span du mot suivant (tout en gardant l'espace)
      else {
        newContent += '</span> <span>'
      }
    }

    // on ferme le span du dernier mot

    newContent += '</span>'

    // on remplace le contenu actuel par notre nouveau contenu

    elements[element].innerHTML = newContent

    // on réinitialise la letiable newContent puisqu'elle va accueillir le contenu de l'objet suivant dans la boucle

    newContent = ''
  }

  return (
    <>
      <h1>L'antre de la relation entre musiciens</h1>

      <div className='marque-ver'>
        <div className='msg'>
          <p>Vous êtes dans un pays rempli de Music.</p>
        </div>
      </div>

      {/* <div className="marque-versuite">
            
          <div className="msgs" >            
            <p className="p msgsuite"> Vous vous approchez de la grotte... <br>
            Tout est sombre et effrayant... <br>
            Un énorme dragon surgit juste devant vous !...<br>
            Il ouvre grand ses machoires et...<br></p>
          </div>
        </div> */}
    </>
  )
}

export default Concept
