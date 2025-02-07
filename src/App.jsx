import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hero() {
  return (
    <div className="hero">
      <h1>Empower Ideas. Fund the Future.</h1>
      <p>Connecting passionate creators globally.</p>
      <div className="cta-buttons">
        <button className="cta-button">Join the Movement</button>
        <button className="cta-button">Explore Now</button>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      {/* Other components can be added here */}
    </>
  )
}

export default App
