import React from 'react';
import './Section5.css';
import paper from '../../assets/paper.png';
import paper1 from '../../assets/paper1.png';
import paper2 from '../../assets/paper2.png';
import paper3 from '../../assets/paper3.png';


const Section5 = () => {
  return (
    <div className="section5">
      <h1>Search billions of data points</h1>
      <p>Dive into our huge collection of records from around the world. Just look up a name to learn more about your ancestors. With exclusive content and accurate results, we'll help you discover more than you ever imagine.</p>
      
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
