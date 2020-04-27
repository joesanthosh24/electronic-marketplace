import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import { addItemToCart, decreaseQuantity } from '../../redux/cart/cart.actions';

import AddedItem from "../added-item/added-item.component";

const CheckoutItem = ({ cartItem, addItem, decreaseAmount }) => {
  return <AddedItem increase={addItem} decrease={decreaseAmount} item={cartItem} />;
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  decreaseAmount: (item) => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
