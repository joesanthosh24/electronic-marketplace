import React from "react";
import { connect } from 'react-redux';

import "./wishlist-item.styles.scss";

import { addItem, decreaseQuantity } from '../../redux/cart-wishlist/cart-wishlist.actions';

import listTypes from '../../utils/listType';

import AddedItem from "../added-item/added-item.component";
import Button from "../custom-button/button.component";

const WishlistItem = ({ cartItem, addItem, decreaseItemCount }) => {
  return (
    <AddedItem listType={listTypes.wishlist} increase={addItem} decrease={decreaseItemCount} item={cartItem} button>
      <Button inverted small>
        ADD
      </Button>
    </AddedItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: (item, list) => dispatch(addItem(item, list)),
  decreaseItemCount: (item, list) => dispatch(decreaseQuantity(item, list))
})

export default connect(null, mapDispatchToProps)(WishlistItem);