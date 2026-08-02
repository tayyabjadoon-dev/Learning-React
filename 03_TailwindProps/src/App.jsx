import { useState } from 'react'
import './App.css'
import CassetteCard from './cassetteCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <CassetteCard />
  <CassetteCard />
  <CassetteCard />
  <CassetteCard />
    </>
  )
}

export default App
