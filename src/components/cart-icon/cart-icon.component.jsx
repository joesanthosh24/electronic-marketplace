import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from '../../redux/cart-wishlist/cart-wishlist.selectors';

import { CartIconContainer, CartImage, ItemSpan } from './cart-icon.styles';

const CartIcon = ({
  itemCount,
  history
}) => {

  return (
    <CartIconContainer onClick={() => history.push('/checkout')}>
      <CartImage
        alt="shopping cart icon"
        src="https://img.icons8.com/ios/50/000000/wallet.png"
      />
      <ItemSpan className="item-count">{itemCount}</ItemSpan>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(CartIcon));
