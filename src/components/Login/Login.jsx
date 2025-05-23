// src/components/Login/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import axios from 'axios'; // Import axios for API calls
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(''); // State for API errors
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send login request to the backend
        const response = await axios.post('http://localhost:8080/users', {
          email: formData.email,
          password: formData.password,
        });

        // Handle successful login
        const { token, role } = response.data;
        login(token); // Save token in context or localStorage
        if (role === 'donor') {
          navigate('/donate');
        } else {
          navigate('/profile');
        }
      } catch (error) {
        // Handle API errors
        console.error('Login error:', error);
        setApiError(error.response?.data?.message || 'Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      {/* Left Section - Illustration */}
      <div className="login-illustration">
        <div className="illustration-wrapper">
          <img 
            src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg"
            alt="Creative funding illustration"
            className="login-hero-image"
          />
          <div className="illustration-text">
            <h3>Welcome to Elevate Fund</h3>
            <p>Join our community of creators and supporters</p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="login-form-container">
        <div className="login-form-content">
          <h2>Member Login</h2>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <div className="input-wrapper">
                <i className="icon-email">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <i className="icon-lock">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                />
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {apiError && <p className="api-error-message">{apiError}</p>}

            <button type="submit" className="login-button">
              LOGIN
            </button>

            <div className="form-links">
              <a href="#" className="forgot-link">
                Forgot Username / Password?
              </a>
              <Link to="/signup" className="create-account-link">
                Create your Account →
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
