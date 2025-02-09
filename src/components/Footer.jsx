import React from 'react';
import './Footer.css';

function Footer() {
  const footerSections = {
    about: {
      title: 'ABOUT',
      links: [
        { name: 'About us', url: '/about' },
        { name: 'Our charter', url: '/charter' },
        { name: 'Stats', url: '/stats' },
        { name: 'Press', url: '/press' },
        { name: 'Jobs', url: '/jobs' }
      ]
    },
    support: {
      title: 'SUPPORT',
      links: [
        { name: 'Help Center', url: '/help' },
        { name: 'Our Rules', url: '/rules' },
        { name: 'Creator Resources', url: '/resources' },
        { name: 'Forward Funds', url: '/funds' },
        { name: 'Brand assets', url: '/brand' }
      ]
    },
    more: {
      title: 'MORE FROM ELEVATEFUND',
      links: [
        { name: 'Newsletters', url: '/newsletters' },
        { name: 'ElevateFund Project Updates', url: '/updates' },
        { name: 'The Creative Independent', url: '/creative' },
        { name: 'Mobile apps', url: '/apps' },
        { name: 'Research', url: '/research' }
      ]
    }
  };

  const categories = [
    'Arts',
    'Comics & Illustration',
    'Design & Tech',
    'Film',
    'Food & Craft',
    'Games',
    'Music',
    'Publishing'
  ];

  return (
    <footer className="footer">
      <nav className="category-nav">
        {categories.map((category, index) => (
          <a key={index} href={`/category/${category.toLowerCase().replace(/ & /g, '-')}`}>
            {category}
          </a>
        ))}
      </nav>

      <div className="footer-content">
        <div className="footer-sections">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <span>ElevateFund, PBC © 2025</span>
          </div>
          
          <div className="footer-right">
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>

            <div className="language-currency">
              <select className="language-select" defaultValue="en">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="te">Telugu</option>
              </select>

              <select className="currency-select" defaultValue="INR">
                <option value="INR">₹ Indian Rupee (INR)</option>
                <option value="USD">$ US Dollar (USD)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <a href="/trust">Trust & Safety</a>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/accessibility">Accessibility Statement</a>
          <a href="/ca-notice">CA Notice of Consent</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 