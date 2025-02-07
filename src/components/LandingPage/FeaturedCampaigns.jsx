import React from 'react';

const FeaturedCampaigns = () => {
  return (
    <section className="featured-campaigns">
      <h2>Trending Projects</h2>
      <div className="campaign-tabs">
        <button className="tab active">Trending</button>
        <button className="tab">Newest</button>
        <button className="tab">Most Funded</button>
        <button className="tab">Ending Soon</button>
      </div>
      <div className="campaign-grid">
        <div className="campaign-card">
          <div className="campaign-image"></div>
          <div className="campaign-content">
            <h3>Project Title</h3>
            <p>Short description of the project goes here...</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
            <div className="campaign-stats">
              <span>75% Funded</span>
              <span>15 Days Left</span>
            </div>
            <button className="btn-primary">Support Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
