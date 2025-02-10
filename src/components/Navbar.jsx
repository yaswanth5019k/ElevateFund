// import { useState } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import StartProject from './StartProject/StartProject'
import Login from './Login/Login'
import Donate from './Donate/Donate'

const Navbar = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);

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
          <Link to="/donate" className="btn-donate" >
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
      <StartProject 
        isOpen={isStartProjectOpen}
        onClose={handleCloseStartProject}
      />
      <Login 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </header>
    
  )
}

export default Navbar 