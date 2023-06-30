
import './App.css'
import BackTitle from './components/BackTitle'
import TextAuthor from './components/TextAuthor'
import phrases from './data/phrases.json'
import { useState } from 'react'



function App() {

  const backsImages = [
      '/fondos/fondo1.jpg', 
      '/fondos/fondo2.jpg', 
      '/fondos/fondo3.jpg', 
      '/fondos/fondo4.webp'
  ]

  const [ index, setIndex ] = useState(0);

  const changePhrase = () => {
    if( index < phrases.length -1 ){
    setIndex(index +1);
    } else {
      setIndex(0);
    }
  };

  document.body.style.backgroundImage= `${ backsImages[index]}`

  const randomImages = Math.floor( Math.random() * ( 4 - 0) + 0 )

  return (
    <main className='general-container'>
        <img 
        className= 'bg-img'
        src= { backsImages[randomImages] } 
        alt= "Imagen de fondo" 
        />
        <BackTitle/>
        <TextAuthor
        data={ phrases[ index ] }
        />
        <button onClick={changePhrase}>
         <i className='bx bx-atom'></i>
        </button>

    </main>
  )
}

export default App
