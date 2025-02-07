import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'
import FeaturedCampaigns from './FeaturedCampaigns'
import HowItWorks from './HowItWorks'
import SuccessStories from './SuccessStories'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCampaigns />
      <HowItWorks />
      <SuccessStories />
    </>
  )
}
