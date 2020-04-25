import React from "react";
import { connect } from "react-redux";

import "./wishlist-item.styles.scss";

import { createStructuredSelector } from "reselect";

import AddedItem from "../added-item/added-item.component";
import Button from "../custom-button/button.component";

const WishlistItem = ({ cartItem }) => {
  return (
    <AddedItem item={cartItem} button>
      <Button inverted small>
        ADD
      </Button>
    </AddedItem>
  );
};

export default WishlistItem;
