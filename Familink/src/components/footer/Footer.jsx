import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Familink</h3>
        <button className="premium-button">Devenez Premium</button>
      </div>
      
      <div className="footer-column">
        <h3>Accueil</h3>
        <ul>
          <li>Inscrivez-vous gratuitement</li>
          <li>Archives historiques</li>
          <li>Ajoutez des photos</li>
          <li>Al Time Machine</li>
          <li>Family Tree Builder</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li>Contactez-nous</li>
          <li>Politique de confidentialité</li>
          <li>Conditions de service</li>
          <li>Accessibilité</li>
          <li>Base de connaissances</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Blog</h3>
        <ul>
          <li>Témoignage utilisateurs</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
