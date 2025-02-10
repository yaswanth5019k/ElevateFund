import React from "react";

const StartProject = () => {
  return (
    <div className="modal">
    <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
      <h2>Start a Fundraiser</h2>
      <form>
        <input type="text" placeholder="Project Name" required />
        <textarea placeholder="Project Description" required></textarea>
        <button type="submit">Create Project</button>
      </form>
    </div>
    </div>
  );
};

export default StartProject;