import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/explore" activeClassName="active">Explore</NavLink>
            <NavLink to="/how-it-works" activeClassName="active">How It Works</NavLink>
        </nav>
    );
}

export default Navbar; 