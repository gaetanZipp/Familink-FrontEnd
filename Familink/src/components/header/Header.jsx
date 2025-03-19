import './Header.css'
import React from 'react'
import FamilyImage from '../../assets/FamilyImage.jpg'
import Navbar from '../navbar/Navbar'
import { FaEnvelopeOpen, FaUser, FaLock } from 'react-icons/fa'
const Header = () => {
  return (
  <div className='header'>
    <Navbar />
    <div className='header-content'>
      <div className="header-content-left">
        <h1>Découvrez votre histoire familiale</h1>
        <p>Créez votre arbre généalogique, trouvez de nouveaux liens de parenté et explorez des milliards de documents historiques</p>
      </div>
      <div className="header-content-right">
        <form>
          <h1>S'ENREGISTRER</h1>
          <div className="input-box">
            <input
              type="text"
              name="nom"
              placeholder="Entrez votre nom"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Entrez votre adresse email"
              required
            />
            <FaEnvelopeOpen className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              required
            />
            <FaLock className="icon" />
          </div>
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default Header;