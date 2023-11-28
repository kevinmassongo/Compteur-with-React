import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //state(état)
  const [compteur, setCompteur] = useState(1)

  //comportement
  const handleClickIncrement = () =>{
    setCompteur(compteur + 1)
  }

  const handleClickDecrement = () =>{
    if(compteur != 0){
      setCompteur(compteur - 1)
    }
  }

  //render
  return (
    <>
      <h1>{compteur}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </>
  )
}

export default App
