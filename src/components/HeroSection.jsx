import './HeroSection.css'
import StatsSection from './StatsSection'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Bring a creative project to life.</h1>
      <p className="hero-subtitle">ON KICKSTARTER:</p>
      <StatsSection />
    </div>
  )
}

export default HeroSection