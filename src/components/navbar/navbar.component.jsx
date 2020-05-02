import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { NavbarContainer, OptionDiv, OptionLink, OptionsContainer, HomeNavLink } from './navbar.styles';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import WishListIcon from '../wishlist-icon/wishlist-icon.component';

const Navbar = ({ currentUser }) => (
    <NavbarContainer>
        <HomeNavLink to="/">
            Home
        </HomeNavLink>
        <OptionsContainer>
            <OptionLink to="/shop-items">SHOP</OptionLink>
            <OptionLink className="option" to="/contact">CONTACT US</OptionLink>
            {
                !currentUser ?
                <OptionLink className="option" to="/registerandsignin">LOG IN</OptionLink> :
                (<OptionDiv className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionDiv>)
            }
            <WishListIcon />
            <CartIcon />
        </OptionsContainer>
    </NavbarContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navbar);