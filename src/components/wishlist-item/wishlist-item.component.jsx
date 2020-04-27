import React from "react";
import { connect } from 'react-redux';

import "./wishlist-item.styles.scss";

import { addItemToWishlist, decreaseQuantity } from '../../redux/wishlist/wishlist.actions';

import AddedItem from "../added-item/added-item.component";
import Button from "../custom-button/button.component";

const WishlistItem = ({ cartItem, addItem, decreaseItemCount }) => {
  return (
    <AddedItem increase={addItem} decrease={decreaseItemCount} item={cartItem} button>
      <Button inverted small>
        ADD
      </Button>
    </AddedItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItemToWishlist(item)),
  decreaseItemCount: (item) => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(WishlistItem);