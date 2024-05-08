import { useState } from 'react'
import './App.css'
import Home from "./pages/home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <Home />
    </>
  )
}

export default App
