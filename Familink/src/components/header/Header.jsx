import './Header.css'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import { FaEnvelopeOpen, FaUser, FaLock } from 'react-icons/fa'

const Header = () => {
  // Déclaration du state pour stocker les données du formulaire
    const [formData, setFormData] = useState({
      nom: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    useEffect(() => {
      // Ajouter une classe au body lorsque la page est montée
      document.body.classList.add('login-register-page');
  
      // Retirer la classe lorsque la page est démontée
      return () => {
        document.body.classList.remove('login-register-page');
      };
    }, []);
  
    const [message, setMessage] = useState(""); // Stocker le message de succès ou d'erreur
  
    // Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Fonction pour soumettre le formulaire via AJAX (fetch)
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Vérifier si les mots de passe correspondent
      if (formData.password !== formData.confirmPassword) {
        setMessage("⚠️ Les mots de passe ne correspondent pas !");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:5261/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: formData.nom,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage("✅ Inscription réussie !");
        } else {
          setMessage(`❌ Erreur : ${data.message || "Problème d'inscription"}`);
          console.log(data);
        }
      } catch (error) {
        setMessage("❌ Erreur de connexion au serveur !");
      }
    };
  
  return (
  <div className='header'>
    <Navbar />
    <div className='header-content'>
      <div className="header-content-left">
        <h1>Discover your family history</h1>
        <p>Create your family tree, find new relatives, and explore billions of historical records</p>
      </div>
      <div className="header-content-right">
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div className="input-box">
              <input
                type="text"
                name="nom"
                placeholder="Enter Your Username"
                required
                value={formData.nom}
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>
    
            <div className="input-box">   
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelopeOpen className="icon" />
            </div>
    
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>
    
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>
          <button type="submit">Sign Up</button>
          <br/><br/>
          <button type="submit">Register With Google</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Header;