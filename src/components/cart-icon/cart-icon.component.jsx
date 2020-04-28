import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from '../../redux/cart-wishlist/cart-wishlist.selectors';

import "./cart-icon.component.scss";

const CartIcon = ({
  itemCount,
  history
}) => {

  return (
    <div className="cart-icon" onClick={() => history.push('/checkout')}>
      <img
        alt="shopping cart icon"
        className="shopping-icon"
        src="https://img.icons8.com/ios/50/000000/wallet.png"
      />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(CartIcon));
