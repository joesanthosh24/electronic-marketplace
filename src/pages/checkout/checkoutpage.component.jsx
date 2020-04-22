import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import "./checkoutpage.styles.scss";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <h1 className="checkout-heading">CHECKOUT</h1>
      <span className="items-span">CART ITEMS</span>
      <div className="chekout-table-headings">
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
        <div className="item-data">
          <div className="data-block">
            <span>{item.name}</span>
          </div>
          <div className="data-block">
            <span>{item.quantity}</span>
          </div>
          <div className="data-block">
            <span>{item.price}</span>
          </div>
          <div className="data-block">
            <span>X</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
