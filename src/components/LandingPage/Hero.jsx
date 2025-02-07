import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empower Ideas. Fund Dreams.</h1>
        <p>Create projects, connect with backers, and bring your vision to life!</p>
        <div className="cta-buttons">
          <button className="btn-primary">Start a Project</button>
          <button className="btn-secondary">Explore Projects</button>
        </div>
        <div className="trust-badges">
          <span><i className="fas fa-users"></i> Trusted by 10,000+ creators</span>
          <span><i className="fas fa-dollar-sign"></i> $5M+ raised for innovative projects</span>
        </div>
      </div>
      <div className="hero-image">
        {/* Background image will be added via CSS */}
      </div>
    </section>
  );
};

export default Hero;
