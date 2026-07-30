import { useState } from 'react'
import './App.css'

function App() {
const [counter,setCounter] = useState(0);
  // let counter = 0

  return (
    <>
       <h1>React Course:</h1>
        <h2>Counter App {counter}</h2>
        <button
        onClick={() => {
          setCounter(counter + 1)
          setCounter(counter + 2)
          setCounter(counter + 3)
          setCounter(counter + 1)
        }}
        >Add Value</button>{" "}
        <button
        onClick={() => {
          setCounter(counter - 1)
        }}
        >Subtract Value</button>
        <p>Footer:</p>
    </>
  )
}

export default App
