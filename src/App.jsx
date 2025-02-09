import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StartProject from './components/StartProject/StartProject'
import './App.css'

function App() {
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <h1>ElevateFund</h1>
            </div>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search projects" 
                className="search-input"
              />
            </div>
            <div className="auth-buttons">
              <button 
                className="btn-primary"
                onClick={() => setIsStartProjectOpen(true)}
              >
                Start a project
              </button>
              <button className="btn-secondary">Log in</button>
            </div>
          </div>
        </header>
        <Hero />
        <Footer />
        <StartProject 
          isOpen={isStartProjectOpen}
          onClose={() => setIsStartProjectOpen(false)}
        />
      </div>
    </Router>
  )
}

export default App
