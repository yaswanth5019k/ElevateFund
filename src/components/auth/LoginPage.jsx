import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password length validation
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Simulate successful login
    setSuccess('Login successful!');
    // ... handle actual login logic here
  };

  return (
    <div className="login-container">
      <div className="quote-section">
        <h1>Turning ideas into reality through collective power.</h1>
      </div>
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <p>Or sign in with:</p>
          <button className="social-button google-button">Google</button>
          <button className="social-button linkedin-button">LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;