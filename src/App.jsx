import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StartProject from './components/StartProject/StartProject'
import Donate from './components/Donate/Donate'
import './App.css'
// import LoginPage from './components/auth/LoginPage'
import Login from './components/Login/Login'
import About from './components/About/About'

function App() {

  return (
    
    <div className="app"> 
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/startproject" element={<StartProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>

  )
}

export default App
