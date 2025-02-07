import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <i className="fas fa-rocket"></i>
          <h3>Start a Project</h3>
          <p>Describe your idea and set a goal</p>
        </div>
        <div className="step">
          <i className="fas fa-share-alt"></i>
          <h3>Launch & Share</h3>
          <p>Promote your campaign to attract backers</p>
        </div>
        <div className="step">
          <i className="fas fa-check-circle"></i>
          <h3>Get Funded</h3>
          <p>Receive funding and bring your idea to life</p>
        </div>
      </div>
      <button className="btn-secondary">Learn More</button>
    </section>
  );
};

export default HowItWorks;
