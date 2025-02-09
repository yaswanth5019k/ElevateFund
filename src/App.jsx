import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
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
              <button className="btn-primary">Start a project</button>
              <button className="btn-secondary">Log in</button>
            </div>
          </div>
        </header>
        <Hero />
        <Footer />
      </div>
    </Router>
  )
}

export default App
