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
    <div className="auth-container">
      <h2>Login Page</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            aria-label="Email"
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            aria-label="Password"
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;