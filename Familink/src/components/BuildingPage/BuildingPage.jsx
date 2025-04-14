import React, { useState } from 'react';
import './BuildingPage.css';

const BuildingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesData, setSlidesData] = useState([
    { firstName: '', NomFamille: '', email: '' }, // Données pour le premier slide
    { fid: '', mid: '' } // Données pour le deuxième slide
  ]);

  const slides = [
    {
      title: "Enter Your Information",
      inputs: [
        { type: "text", name: "firstName", placeholder: "Enter Your Firstname", required: true },
        { type: "text", name: "NomFamille", placeholder: "Enter Your Lastname", required: true },
        { type: "email", name: "email", placeholder: "Enter Your Email Address", required: true }
      ]
    },
    {
      title: "Enter Your Information",
      inputs: [
        { type: "text", name: "fid", placeholder: "Enter Your Father's Name", required: true },
        { type: "text", name: "mid", placeholder: "Enter Your Mother's Name", required: true }
      ]
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlidesData(prev => {
      const newData = [...prev];
      newData[currentSlide] = {
        ...newData[currentSlide],
        [name]: value
      };
      return newData;
    });
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setMessage("⚠️ Veuillez remplir tous les champs correctement !");
      return;
    }
    
    console.log('All slides data:', slidesData);
    // Traitez ici la soumission de toutes les données
    alert('Données soumises avec succès!');
  };

  return (
    <div className="Building">
      <h1>Build Your Family Tree</h1>
      <div className="Building-slide">
        <h2>{slides[currentSlide].title}</h2>
        {slides[currentSlide].inputs.map((input, index) => (
          <input
            key={`${input.name}-${index}`}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
            value={slidesData[currentSlide][input.name]}
            onChange={handleInputChange}
          />
        ))}
        <div className="navigation-buttons">
          {currentSlide > 0 && (
            <button onClick={handlePrev}>Retour</button>
          )}
          {currentSlide < slides.length - 1 ? (
            <button onClick={handleNext}>Suivant</button>
          ) : (
            <button className="submit-btn" onClick={handleSubmit}>Soumettre</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildingPage;