import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StartProject from './components/StartProject/StartProject'
import Login from './components/Login/Login'
import Donate from './components/Donate/Donate'
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
          <nav className="navbar">
            <div className="navbar-left">
              <Link to="/" className="logo">ElevateFund</Link>
              <div className="nav-links">
                <a href="#search">Search</a>
                <a href="#fundraise">Fundraise</a>
                <a href="#about">About</a>
              </div>
            </div>
            
            <div className="navbar-right">
              <Link to="/donate" className="btn-donate">Donate</Link>
              <button 
                className="btn-primary"
                onClick={handleStartProject}
              >
                Start a fundraiser
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setIsLoginOpen(true)}
              >
                Sign in
              </button>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Footer />
            </>
          } />
          <Route path="/donate" element={<Donate />} />
        </Routes>

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
