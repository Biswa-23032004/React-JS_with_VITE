import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1

    setCounter(counter)
    // setCounter(counter + 1)

  }

  return (
    <>
    <h1>Maggie aur soup</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addvalue}>Add value {counter}</button>
    <br />
    <button>Remove value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
