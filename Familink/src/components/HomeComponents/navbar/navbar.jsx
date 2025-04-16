import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="navbar">
            <div className="logo">Familink</div>
            
            <div 
                className={`nav-links ${isActive ? 'active' : ''}`}
                onClick={() => setIsActive(false)}
            >
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Tree</a></li>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Notifications</a></li>
                    <li><a href="#">Search</a></li>
                </ul>
            </div>
            
            <div 
                className={`hamburger ${isActive ? 'active' : ''}`} 
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Navbar;