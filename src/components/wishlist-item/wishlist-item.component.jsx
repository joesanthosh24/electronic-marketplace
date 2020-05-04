import React from "react";
import { connect } from 'react-redux';

import "./wishlist-item.styles.scss";

import { addItem, decreaseQuantity, removeItem } from '../../redux/cart-wishlist/cart-wishlist.actions';

import listTypes from '../../utils/listType';

import AddedItem from "../added-item/added-item.component";
import Button from "../custom-button/button.component";

const WishlistItem = ({ cartItem, addItem, decreaseItemCount, removeItem }) => {
  const addToCart = (item, listTypeToAdd, listTypeToRemove) => {
    for(let i=0; i<item.quantity; i++) {
      addItem(item, listTypeToAdd);
    }
    
    removeItem(item, listTypeToRemove);
  }

  return (
    <AddedItem remove={removeItem} listType={listTypes.wishlist} increase={addItem} decrease={decreaseItemCount} item={cartItem} button>
      <Button onClick={() => addToCart(cartItem, listTypes.cart, listTypes.wishlist)} inverted small>
        ADD
      </Button>
    </AddedItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: (item, list) => dispatch(addItem(item, list)),
  decreaseItemCount: (item, list) => dispatch(decreaseQuantity(item, list)),
  removeItem: (item, list) => dispatch(removeItem(item, list))
})

export default connect(null, mapDispatchToProps)(WishlistItem);