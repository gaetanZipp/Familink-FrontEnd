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
        <h1>We've thought of everything</h1>
        <p>We will also manage the sending of notifications.
        ns mail in case of a birthday or a significant event of a person in the tree</p>
        <p>As a result, one will be able to accurately view the various important details of a person and send notifications as needed</p>
      </div>
    </div>
  );
};

export default Section3;
