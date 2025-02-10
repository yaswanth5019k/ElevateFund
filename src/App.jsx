import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navber from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StartProject from './components/StartProject/StartProject'
import Login from './components/Login/Login'
import Donate from './components/Donate/Donate'
import './App.css'

function App() {

  return (
    
      <div className="app"> 
        <Navber />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <Hero />
              <Footer />
            </main>
          } />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
  )
}

export default App
