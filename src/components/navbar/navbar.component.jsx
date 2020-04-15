import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import WishListIcon from '../wishlist-icon/wishlist-icon.component';
import DropdownDisplay from '../dropdown-display/dropdown-display.component';

const Navbar = ({ currentUser, cartHidden, wishListHidden }) => (
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
        {
            !cartHidden ? <DropdownDisplay title="Cart" /> : null
        }
        {
            !wishListHidden ? <DropdownDisplay title="Wishlist" /> : null
        }
    </nav>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }, wishlist }) => ({
    currentUser,
    cartHidden: hidden,
    wishListHidden: wishlist.hidden
});

export default connect(mapStateToProps)(Navbar);