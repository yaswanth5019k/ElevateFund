import React from 'react';
import './AuthStyles.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <h2>Login Page</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage; 