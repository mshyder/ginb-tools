import React from 'react';
import { socialLinks } from '../data';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src="ginm-logo-transparent.png" alt="GinmTools Logo" />
        <p>Contact us at: <a href="mailto:sales@ginmtools.com">sales@ginmtools.com</a></p>
        <p>&copy; 2026 GinmTools GmbH. All rights reserved.</p>
      </div>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;