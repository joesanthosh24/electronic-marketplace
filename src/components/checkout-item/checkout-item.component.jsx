import React from "react";
import { connect } from "react-redux";

import { addItem, decreaseQuantity } from '../../redux/cart-wishlist/cart-wishlist.actions';

import listTypes from '../../utils/listType';

import AddedItem from "../added-item/added-item.component";

const CheckoutItem = ({ cartItem, addItem, decreaseAmount }) => {
  return <AddedItem listType={listTypes.cart} increase={addItem} decrease={decreaseAmount} item={cartItem} />;
};

const mapDispatchToProps = dispatch => ({
  addItem: (item, list) => dispatch(addItem(item, list)),
  decreaseAmount: (item, list) => dispatch(decreaseQuantity(item, list))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
