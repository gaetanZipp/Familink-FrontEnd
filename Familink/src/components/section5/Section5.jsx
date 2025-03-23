import React from 'react';
import './Section5.css';
import paper from '../../assets/paper.png';
import paper1 from '../../assets/paper1.png';
import paper2 from '../../assets/paper2.png';
import paper3 from '../../assets/paper3.png';


const Section5 = () => {
  return (
    <div className="section5">
      <h1>Recherchez des milliards de données</h1>
      <p>Plongez dans notre immense collection de registres du monde entier. Cherchez simplement un nom pour en savoir plus sur vos ancêtres. Avec un contenu exclusif et des résultats précis, nous vous aiderons à découvrir plus que vous ne l'imaginez.</p>
      
      <div className="images-container">
        <img src={paper} alt="paper" className="image" />
        <img src={paper1} alt="paper1" className="image" />
        <img src={paper2} alt="paper2" className="image" />
        <img src={paper3} alt="paper3" className="image" />
      </div>
    </div>
  );
};

export default Section5;
