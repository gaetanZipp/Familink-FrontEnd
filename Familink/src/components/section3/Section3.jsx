import React from 'react';
import './Section3.css';
import photo from '../../assets/photo.png';
import portrait from '../../assets/portrait.png';

const Section3 = () => {
  return (
    <div className="section3">
      <div className="images-container">
        <img src={photo} alt="Photo de famille" className="image photo" />
        <img src={portrait} alt="Portrait" className="image portrait" />
      </div>
      <div className="text-container">
        <h1>Pensez à animer vos photos de famille</h1>
        <p>Deep Nostalgia - l'outil internet qui fait sensation !</p>
        <p>Plus de 116 millions d'animations, et ce n'est pas fini</p>
      </div>
    </div>
  );
};

export default Section3;
