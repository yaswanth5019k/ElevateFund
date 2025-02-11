
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isLoggedIn } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();

  const openStartProject = () => {
    if (isLoggedIn) {
      navigate('/startproject');
    } else {
      navigate('/login');
    }
  };

  const openDonate = () => {
    if (isLoggedIn) {
      navigate('/donate');
    } else {
      navigate('/login');
    }
  };

  const navOptions = [
    { name: 'Home', path: '/home' },
    { name: 'Block', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Search', path: '/search' },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <div>
            <Link to="/">
              <h1>FundBlock</h1>
            </Link>
          </div>
          <div className="nav-links">
            {navOptions.map((navOption, index) => (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <Link
                  to={navOption.path}
                  className={location.pathname === navOption.path ? 'active' : ''}
                >
                  {navOption.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="navbar-right">
          <motion.button
            className="btn-donate"
            onClick={openDonate}
          >
            Donate
          </motion.button>

          <motion.button
            className="btn-fundraiser"
            onClick={openStartProject}
          >
            Start Fundraiser
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
