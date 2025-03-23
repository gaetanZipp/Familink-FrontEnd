import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Familink. Tous droits réservés.</p>
        <p>Contactez-nous : contact@familink.com</p>
        <p>Suivez-nous sur nos réseaux sociaux :</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>Politique de confidentialité | Conditions d'utilisation</p>
      </div>
    </div>
  );
};

export default Footer;
