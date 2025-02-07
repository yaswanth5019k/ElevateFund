import React from 'react';

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-grid">
        <div className="story-card">
          <div className="story-image"></div>
          <div className="story-content">
            <h3>Project Name</h3>
            <p>"This platform helped me turn my dream into reality!"</p>
            <div className="story-stats">
              <span>$50,000 Raised</span>
              <span>500 Backers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
