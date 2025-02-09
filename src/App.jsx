import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StartProject from './components/StartProject/StartProject'
import Login from './components/Login/Login'
import './App.css'

function App() {
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleStartProject = () => {
    setIsStartProjectOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const handleCloseStartProject = () => {
    setIsStartProjectOpen(false)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

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
                onClick={handleStartProject}
              >
                Start a project
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setIsLoginOpen(true)}
              >
                Log in
              </button>
            </div>
          </div>
        </header>
        <Hero />
        <Footer />
        <StartProject 
          isOpen={isStartProjectOpen}
          onClose={handleCloseStartProject}
        />
        <Login 
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      </div>
    </Router>
  )
}

export default App
