import React from 'react';

import './navbar.styles.scss';

import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <Link className="home-link" to="/">
            Home
        </Link>
        <div className="nav-options">
            <Link className="option" to="/contact">CONTACT US</Link>
            <Link className="option" to="/registerandsignin">LOG IN</Link>
        </div>
    </nav>
);

export default Navbar;