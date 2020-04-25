import React from "react";
import { connect } from 'react-redux';

import "./wishlist-item.styles.scss";
import { createStructuredSelector } from 'reselect';

const WishlistItem = ({
  cartItem,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-block">
        <img src={`${imageUrl}`} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow arrow-left">&#10094;</div>
        {quantity}
        <div className="arrow">&#10095;</div>
      </div>
      <div className="price">${price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default WishlistItem;