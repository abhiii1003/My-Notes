import React, { useState } from 'react';
import StarsIcon from '@material-ui/icons/Stars';
import './navbar.css';
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <h1>
                        <StarsIcon />
                        Keep Notes
                    </h1>
                </a>
                <div className={`navbar-menu ${showMenu ? 'active' : ''}`}>
                    <a href="/" className="navbar-link">
                        Home
                    </a>
                    <a href="/about" className="navbar-link">
                        About
                    </a>
                    <a href="/contact" className="navbar-link">
                        Contact
                    </a>
                </div>
                <div className="navbar-toggle" onClick={handleMenuClick}>
                    <span className="navbar-icon"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
