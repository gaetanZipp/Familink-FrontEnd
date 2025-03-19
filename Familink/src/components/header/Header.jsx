import './Header.css'
import React from 'react'
import FamilyImage from '../../assets/family.jpg'

const Header = () => {
 if (playStatus) {
   return (
    <img src={FamilyImage} className='header' alt='family' />
   )
 }
}

export default Header