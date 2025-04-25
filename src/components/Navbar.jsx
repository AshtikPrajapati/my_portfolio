import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
                <div className="left nav_items">Portfolio</div>

                <div className="hamburger" onClick={toggleMenu}>
                    {/* Toggle icon between hamburger and cross */}
                    {isOpen ? (
                        <span className="line">✖</span>
                    ) : (
                        <>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </>
                    )}
                </div>

                <div className={`right ${isOpen ? "menu_open" : ""}`}>
                    <a href="#home" className="nav_items" onClick={toggleMenu}>Home</a>
                    <a href="#experience" className="nav_items" onClick={toggleMenu}>Experience</a>
                    <a href="#skills" className="nav_items" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" className="nav_items" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" className="nav_items" onClick={toggleMenu}>Contact</a>
                </div>
            </div>
        </>
    );
}
