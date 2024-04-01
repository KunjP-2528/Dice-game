import React, { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay'


const App = () => {
  const[isGameSatrted,setISGameStarted] = useState(false)

    function ToggleGamePLay(){
      setISGameStarted((prev)=>!prev);
  }
  return (
    <>
    {
      isGameSatrted ? <GamePlay/>: <StartGame toggle={ToggleGamePLay}/>
    }
   
   
    </>
  )
}

export default App



