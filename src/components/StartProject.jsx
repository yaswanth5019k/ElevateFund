import React from 'react';
import './StartProject.css';

function StartProject() {
  return (
    <div className="start-project">
      <h1>Start Your Project</h1>
      <div className="project-form">
        <div className="form-section">
          <h2>Tell us about your project</h2>
          <form>
            <div className="form-group">
              <label>Project Title</label>
              <input type="text" placeholder="Enter your project title" />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select>
                <option value="">Select a category</option>
                <option value="tech">Technology</option>
                <option value="design">Design</option>
                <option value="games">Games</option>
                {/* Add more categories */}
              </select>
            </div>

            <div className="form-group">
              <label>Project Description</label>
              <textarea placeholder="Describe your project"></textarea>
            </div>

            <div className="form-group">
              <label>Funding Goal</label>
              <input type="number" placeholder="Enter amount" />
            </div>

            <button type="submit" className="submit-btn">Create Project</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartProject; 