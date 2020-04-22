import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './navbar.styles.scss';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import WishListIcon from '../wishlist-icon/wishlist-icon.component';

const Navbar = ({ currentUser }) => (
    <nav className="navbar">
        <Link className="home-link" to="/">
            Home
        </Link>
        <div className="nav-options">
            <Link className="option" to="/shop-items">SHOP</Link>
            <Link className="option" to="/contact">CONTACT US</Link>
            {
                !currentUser ?
                <Link className="option" to="/registerandsignin">LOG IN</Link> :
                (<div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>)
            }
            <WishListIcon />
            <CartIcon />
        </div>
    </nav>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navbar);