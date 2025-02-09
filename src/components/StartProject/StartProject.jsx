import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartProject.css';

function StartProject({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    fundingGoal: '',
    deadline: '',
    projectImage: null,
    rewards: [{ tier: '', description: '', amount: '' }],
    location: '',
    teamMembers: [{ name: '', role: '' }]
  });
  const [errors, setErrors] = useState({});

  const categories = [
    'Technology',
    'Art',
    'Food',
    'Games',
    'Music',
    'Film',
    'Design',
    'Publishing'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        projectImage: file
      }));
    }
  };

  const addReward = () => {
    setFormData(prev => ({
      ...prev,
      rewards: [...prev.rewards, { tier: '', description: '', amount: '' }]
    }));
  };

  const updateReward = (index, field, value) => {
    const newRewards = [...formData.rewards];
    newRewards[index][field] = value;
    setFormData(prev => ({
      ...prev,
      rewards: newRewards
    }));
  };

  const addTeamMember = () => {
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: '', role: '' }]
    }));
  };

  const updateTeamMember = (index, field, value) => {
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index][field] = value;
    setFormData(prev => ({
      ...prev,
      teamMembers: newTeamMembers
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Project title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (formData.description.length > 500) newErrors.description = 'Description must be less than 500 characters';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.fundingGoal) newErrors.fundingGoal = 'Funding goal is required';
    if (!formData.deadline) newErrors.deadline = 'Deadline is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      onClose();
      navigate('/success'); // Redirect to success page
    }
  };

  const RewardTier = ({ reward, index, onUpdate, onRemove }) => (
    <div className="reward-tier">
      <div className="reward-header">
        <h4>Reward Tier {index + 1}</h4>
        <button type="button" className="remove-button" onClick={() => onRemove(index)}>
          <span className="remove-icon">×</span>
        </button>
      </div>
      <div className="reward-inputs">
        <div className="input-group">
          <label>Tier Name</label>
          <input
            type="text"
            placeholder="e.g., Early Bird Special"
            value={reward.tier}
            onChange={(e) => onUpdate(index, 'tier', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea
            placeholder="Describe what backers will receive"
            value={reward.description}
            onChange={(e) => onUpdate(index, 'description', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Amount (₹)</label>
          <input
            type="number"
            placeholder="1000"
            value={reward.amount}
            onChange={(e) => onUpdate(index, 'amount', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Estimated Delivery</label>
          <input
            type="month"
            value={reward.delivery || ''}
            onChange={(e) => onUpdate(index, 'delivery', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const TeamMember = ({ member, index, onUpdate, onRemove }) => (
    <div className="team-member">
      <div className="member-header">
        <h4>Team Member {index + 1}</h4>
        <button type="button" className="remove-button" onClick={() => onRemove(index)}>
          <span className="remove-icon">×</span>
        </button>
      </div>
      <div className="member-inputs">
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter team member's name"
            value={member.name}
            onChange={(e) => onUpdate(index, 'name', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Role</label>
          <input
            type="text"
            placeholder="e.g., Project Lead, Designer"
            value={member.role}
            onChange={(e) => onUpdate(index, 'role', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Bio</label>
          <textarea
            placeholder="Brief description of their experience and role in the project"
            value={member.bio || ''}
            onChange={(e) => onUpdate(index, 'bio', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const removeReward = (index) => {
    setFormData(prev => ({
      ...prev,
      rewards: prev.rewards.filter((_, i) => i !== index)
    }));
  };

  const removeTeamMember = (index) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className={`start-project-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Start Your Project</h2>
          <button className="close-button" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-step">
            <div className="form-group">
              <label htmlFor="title">Project Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                maxLength="500"
                className={errors.description ? 'error' : ''}
              />
              <span className="character-count">
                {formData.description.length}/500 characters
              </span>
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={errors.category ? 'error' : ''}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="fundingGoal">Funding Goal (₹) *</label>
              <input
                type="number"
                id="fundingGoal"
                name="fundingGoal"
                value={formData.fundingGoal}
                onChange={handleInputChange}
                min="1000"
                className={errors.fundingGoal ? 'error' : ''}
              />
              {errors.fundingGoal && <span className="error-message">{errors.fundingGoal}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="deadline">Project Deadline *</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={errors.deadline ? 'error' : ''}
              />
              {errors.deadline && <span className="error-message">{errors.deadline}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="projectImage">Project Image/Video</label>
              <input
                type="file"
                id="projectImage"
                name="projectImage"
                onChange={handleImageUpload}
                accept="image/*,video/*"
                style={{ display: 'none' }}
              />
              <label htmlFor="projectImage" className="file-upload-button">
                {formData.projectImage ? 'Change File' : 'Choose File'}
              </label>
              {formData.projectImage && (
                <span className="file-name">
                  Selected: {formData.projectImage.name}
                </span>
              )}
            </div>

            <div className="form-section rewards-section">
              <h3>Rewards for Backers</h3>
              <p className="section-description">
                Create compelling rewards to encourage backers to support your project
              </p>
              <div className="rewards-container">
                {formData.rewards.map((reward, index) => (
                  <RewardTier
                    key={index}
                    reward={reward}
                    index={index}
                    onUpdate={updateReward}
                    onRemove={removeReward}
                  />
                ))}
              </div>
              <button 
                type="button" 
                onClick={addReward} 
                className="add-button add-reward"
              >
                <span className="add-icon">+</span>
                Add New Reward Tier
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-section team-section">
              <h3>Team Members</h3>
              <p className="section-description">
                Introduce the talented people behind your project
              </p>
              <div className="team-container">
                {formData.teamMembers.map((member, index) => (
                  <TeamMember
                    key={index}
                    member={member}
                    index={index}
                    onUpdate={updateTeamMember}
                    onRemove={removeTeamMember}
                  />
                ))}
              </div>
              <button 
                type="button" 
                onClick={addTeamMember} 
                className="add-button add-team"
              >
                <span className="add-icon">+</span>
                Add Team Member
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StartProject; 