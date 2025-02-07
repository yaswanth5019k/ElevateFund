import React from 'react';
import './AuthStyles.css';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

// Social auth button component
const SocialButton = ({ icon, provider, onClick }) => {
  return (
    <button className="social-button" onClick={onClick}>
      <img src={icon} alt={`${provider} icon`} />
      <span>Continue with {provider}</span>
    </button>
  );
};

// Form input component
const FormInput = ({ label, type = "text", name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// Submit button component
const SubmitButton = ({ children, loading }) => {
  return (
    <button 
      className="auth-button" 
      type="submit" 
      disabled={loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

// Message components
const ErrorMessage = ({ message }) => (
  message ? <div className="error-message">{message}</div> : null
);

const SuccessMessage = ({ message }) => (
  message ? <div className="success-message">{message}</div> : null
);

export {
  AuthLayout,
  SocialButton,
  FormInput,
  SubmitButton,
  ErrorMessage,
  SuccessMessage
}; 