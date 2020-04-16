import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";
import { addItemToWishlist } from "../../redux/wishlist/wishlist.actions";

import "./shop-item.styles.scss";

import Button from "../custom-button/button.component";

const ShopItem = ({ item, addToCart, addToWishlist }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="item">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="title-price">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button red onClick={() => addToCart(item)}>ADD TO CART</Button>
      <Button inverted onClick={() => addToWishlist(item)}>ADD TO WISHLIST</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: itemToAdd => dispatch(addItemToCart(itemToAdd)),
  addToWishlist: itemToAdd => dispatch(addItemToWishlist(itemToAdd))
});

export default connect(null, mapDispatchToProps)(ShopItem);
