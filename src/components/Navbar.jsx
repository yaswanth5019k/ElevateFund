import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming you are managing login state
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Get the current location

  const openStartProject = () => {
    if (isLoggedIn) {
      navigate("/startproject");
    } else {
      navigate("/login");
    }
  };

  const openDonate = () => {
    if (isLoggedIn) {
      navigate("/donate");
    } else {
      navigate("/login");
    }
  };

  const navOptions = [
    { name: "Home", path: "/home" },
    { name: "Fundraise", path: "/fundraise" },
    { name: "About", path: "/about" },
    { name: "Search", path: "/search" },
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
              <Link
                key={index}
                to={navOption.path}
                className={location.pathname === navOption.path ? "active" : ""}
              >
                {navOption.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="navbar-right">
          <button className="btn-donate" onClick={openDonate}>
            Donate
          </button>
          <button className="btn-fundraiser" onClick={openStartProject}>
            Start Fundraiser
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
