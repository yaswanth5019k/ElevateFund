import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { motion } from 'framer-motion';
import './Profile.css';

function Profile() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Mock user data - in a real app, this would come from your backend
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    joinDate: "January 2024",
    fundsRaised: 12000,
    totalProjects: 2,
    projects: [
      {
        id: 1,
        title: "Eco-Friendly Water Bottle",
        description: "Raising funds to launch a sustainable water bottle brand.",
        raised: 8000,
        goal: 10000,
        date: "2 days ago"
      },
      {
        id: 2,
        title: "Community Garden Initiative",
        description: "Creating a green space for our neighborhood.",
        raised: 4000,
        goal: 5000,
        date: "1 week ago"
      }
    ]
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddProject = () => {
    // Navigate to a project creation page (to be implemented)
    navigate('/startproject');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <motion.div 
          className="profile-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-image-container">
            <img src={userData.profilePicture} alt="Profile" className="profile-image" />
            <div className="profile-status">Active</div>
          </div>
          <div className="profile-info">
            <h1>{userData.name}</h1>
            <p className="email">{userData.email}</p>
            <p className="join-date">Member since {userData.joinDate}</p>
          </div>
        </motion.div>

        <motion.div 
          className="profile-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="stat-card">
            <h3>₹{userData.fundsRaised.toLocaleString()}</h3>
            <p>Funds Raised</p>
          </div>
          <div className="stat-card">
            <h3>{userData.totalProjects}</h3>
            <p>Projects Created</p>
          </div>
        </motion.div>

        <motion.div 
          className="profile-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="edit-profile-btn" onClick={handleAddProject}>Add Project</button>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </motion.div>

        <motion.div 
          className="recent-activity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>Your Fundraising Projects</h2>
          <div className="activity-list">
            {userData.projects.map((project) => (
              <div className="activity-item" key={project.id}>
                <div className="activity-icon">🎯</div>
                <div className="activity-details">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <span className="activity-date">{project.date}</span>
                  <div className="funds-raised">Raised: ₹{project.raised.toLocaleString()} / ₹{project.goal.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile; 