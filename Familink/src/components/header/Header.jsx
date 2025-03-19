import './Header.css'
import React from 'react'
import FamilyImage from '../../assets/FamilyImage.jpg'
import Navbar from '../navbar/Navbar'
const Header = () => {
  return (
  <div className='header'>
    <Navbar />
    <div className='header-content'>
      <div className="text">
        <h2>Decouvrez votre histoire familiale</h2>
        <p>Créez votre arbre généalogique, trouvez de nouveaux liens de parenté et explorez des milliards de documents historiques</p>
      </div>
      <div>
        <p>Bonjour le monde</p>
      </div>
    </div>
  </div>
  )
}

export default Header;