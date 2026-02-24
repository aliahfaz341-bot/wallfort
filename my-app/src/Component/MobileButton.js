import React, { useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <div className="mobile-menu-container">
            {/* Button to toggle menu */}
            <button onClick={toggleMenu} className="menu-button">
                {isOpen ? '☰' : ' ☰'}
            </button>

            {/* Menu content */}
            {isOpen && (
                <div className="menu-content">
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#about" onClick={toggleMenu}>About Us</a>
                    <a href="#services" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" onClick={toggleMenu}>Blogs</a>
                    <a href="#contact" onClick={toggleMenu}>Contact Us</a>
                </div>
            )}
        </div>
    );
};
export default MobileMenu;