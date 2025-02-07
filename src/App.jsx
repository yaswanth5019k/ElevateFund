import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'
import ProfileSetup from './components/auth/ProfileSetup'
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
  // You can add authentication state check here
  const isAuthenticated = false; // Replace with your auth state management
  const hasProfile = false; // Replace with your profile check logic

  return (
<<<<<<< HEAD
    <>
      <Hero />
      {/* Other components can be added here */}
    </>
=======
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
              (hasProfile ? <Navigate to="/dashboard" /> : <Navigate to="/profile-setup" />) : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <LoginPage />
          } 
        />
        <Route 
          path="/signup" 
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <SignupPage />
          } 
        />

        {/* Protected Routes */}
        <Route 
          path="/profile-setup" 
          element={
            isAuthenticated ? 
              (hasProfile ? <Navigate to="/dashboard" /> : <ProfileSetup />) : 
              <Navigate to="/login" />
          } 
        />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
>>>>>>> main
  )
}

export default App
