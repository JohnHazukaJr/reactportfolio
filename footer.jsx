// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // Make sure this import points to the correct file path

function Footer() {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} John Hazuka Portfolio. All rights reserved.</p>
      </footer>
    );
}

export default Footer;

  