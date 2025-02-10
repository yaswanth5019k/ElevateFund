// import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleStartProject = () => {
    setIsStartProjectOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const handleCloseStartProject = () => {
    setIsStartProjectOpen(false)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  return (
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
          <Link to="/donate" className="btn-donate">
            Donate
          </Link>
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
  )
}

export default Navbar 