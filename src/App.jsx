import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import FeaturedProjects from './components/FeaturedProjects'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedProjects />
      </main>
    </div>
  )
}

export default App
