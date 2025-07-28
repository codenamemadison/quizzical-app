import { useState } from 'react'
import clsx from 'clsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import blueBlob from "./assets/blue_blob.png"
import yellowBlob from "./assets/yellow_blob.png"
import './App.css'
import StartScreen from './components/startScreen'
import QuizScreen from './components/QuizScreen'

function App() {
  const [gameInProgress, setGameInProgress] = useState(false)
  return (
    <>
      {!gameInProgress ? 
        <StartScreen startGame={() => setGameInProgress(true)}/> : 
        <QuizScreen/> 
      }
      <img src={blueBlob} 
        className={clsx("bg-asset", {
          "start-screen-blue": !gameInProgress,
          "game-screen-blue": gameInProgress
        })}/>
      <img src={yellowBlob} 
      className={clsx("bg-asset", {
        "start-screen-yellow": !gameInProgress,
        "game-screen-yellow": gameInProgress
      })}/>
    </>
  )
}

export default App
