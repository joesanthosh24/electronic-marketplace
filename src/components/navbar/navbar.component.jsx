import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';

import './navbar.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Navbar = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {
            !hidden ? <CartDropdown /> : null
        }
    </nav>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Navbar);