import React from 'react';
import './Section4.css';
import genealogieImage from '../../assets/genealogie.jpg'; // Assurez-vous que l'image est bien dans "assets"

const Section4 = () => {
  return (
    <div className="section4">
      <h1>Créez votre arbre généalogique en ligne</h1>
      <p>
        Partir sur les traces de votre passé commence par votre arbre généalogique.
        Sur Familink, il n'y a rien de plus facile : ajoutez des noms, des dates, 
        des photos et des histoires et partagez-le avec votre famille.
      </p>
      <div className="image-container">
        <img src={genealogieImage} alt="Arbre généalogique" />
      </div>
      <button className="start-button">Commencez votre essai</button>
    </div>
  );
};

export default Section4;
