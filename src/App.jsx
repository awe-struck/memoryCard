import './App.css'
import Header from './game/Header'
import PokemonCardGroup from './game/PokemonCardGroup'

import {  useState } from "react"

function App() {

  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [isReset, setIsReset] = useState(false)

  function endCurrentRun(){
    if (score > maxScore) {
      setMaxScore(score)
    }
    setScore(0)
    setIsReset(true)
    console.log("Current run ended, try again to become the Pokemon Master!")
    console.log("also reset the game and ")
  }
  
  function incrementScore() {
    setScore((prevScore)=> prevScore + 1)
    setIsReset(false)
    console.log("Clicked, so incremented score")
    console.log("Still playing, so no need to reset the game")           
  }


  return (
    <>  
      <Header 
        score={score}
        maxScore={maxScore}
      />
      <PokemonCardGroup
        incrementScore={incrementScore}
        endCurrentRun={endCurrentRun}
        isReset={isReset}
      />
    </>
  )
}

export default App
