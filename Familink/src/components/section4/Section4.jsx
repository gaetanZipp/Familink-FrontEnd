import React from 'react';
import './Section4.css';
import genealogieImage from '../../assets/genealogie.jpg'; // Assurez-vous que l'image est bien dans "assets"

const Section4 = () => {
  return (
    <div className="section4">
      <h1>Save your data</h1>
      <p>
      Among our illustrious options, you will also have the possibility to load your data from an external file but you will also be able to save your information by exporting it in the appropriate format 
      </p>
      <div className="image-container">
        <img src={genealogieImage} alt="Arbre généalogique" />
      </div>
    </div>
  );
};

export default Section4;
