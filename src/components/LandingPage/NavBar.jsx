import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>CrowdFund</h1>
      </div>
      <div className="nav-links">
        <a href="#explore">Explore</a>
        <a href="#how-it-works">How It Works</a>
        <button className="btn-secondary" onClick={() => navigate('/login')}>Log In</button>
        <button className="btn-primary">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
