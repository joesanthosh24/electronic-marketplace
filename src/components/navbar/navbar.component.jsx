import React from 'react';
import { connect } from 'react-redux';

import './navbar.styles.scss';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Navbar = ({ currentUser }) => (
    <nav className="navbar">
        <Link className="home-link" to="/">
            Home
        </Link>
        <div className="nav-options">
            <Link className="option" to="/contact">CONTACT US</Link>
            {
                !currentUser ?
                <Link className="option" to="/registerandsignin">LOG IN</Link> :
                (<div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>)   
            }
        </div>
    </nav>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);