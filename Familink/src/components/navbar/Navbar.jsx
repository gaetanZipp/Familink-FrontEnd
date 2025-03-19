import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    
    <div className="nav">
      <div className="nav-logo">Familink</div>
      <ul className="nav-menu">
        <li>Connexion</li>
        <li>Accessibilite</li>
        <li>Langue</li>
      </ul>
    </div>
  )
}

export default Navbar