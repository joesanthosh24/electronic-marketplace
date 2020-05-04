import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart-wishlist/cart-wishlist.selectors";

import "./checkoutpage.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <div className="checkout-page">
    <h1 className="checkout-title">CHECKOUT</h1>
    <span className="items-span">CART ITEMS</span>
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem cartItem={item} key={item.id} />
    ))}
    <span className="item-total">Total: ${cartItemsTotal}</span>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: Any future date in MM/YY format - CW: 123
    </div>
    <StripeCheckoutButton price={cartItemsTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
