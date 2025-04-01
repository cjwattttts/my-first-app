import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Online Marketplace. All rights reserved.</p>
      <nav>
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;