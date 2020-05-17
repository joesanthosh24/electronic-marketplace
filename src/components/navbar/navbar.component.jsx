import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  NavbarContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
  HomeNavLink,
} from "./navbar.styles";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

import CartIcon from "../cart-icon/cart-icon.component";
import WishListIcon from "../wishlist-icon/wishlist-icon.component";

const Navbar = ({ currentUser, signOutStart }) => (
  <NavbarContainer>
    <HomeNavLink to="/">Home</HomeNavLink>
    <OptionsContainer>
      <OptionLink to="/shop-items">SHOP</OptionLink>
      <OptionLink className="option" to="/contact">
        CONTACT US
      </OptionLink>
      {!currentUser ? (
        <OptionLink className="option" to="/registerandsignin">
          LOG IN
        </OptionLink>
      ) : (
        <OptionDiv className="option" onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      )}
      <WishListIcon />
      <CartIcon />
    </OptionsContainer>
  </NavbarContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);