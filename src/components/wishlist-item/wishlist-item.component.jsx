import React from "react";

import "./wishlist-item.styles.scss";

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