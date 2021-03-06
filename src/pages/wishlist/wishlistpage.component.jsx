import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import "./wishlistpage.styles.scss";

import {
  selectWishlistItemsTotal,
  selectWishlistItems,
} from "../../redux/cart-wishlist/cart-wishlist.selectors";
import WishlistItem from "../../components/wishlist-item/wishlist-item.component";

const WishlistPage = ({ wishlistItems, wishlistItemsTotal }) => {
  return (
    <div className="checkout-page">
      <h1 className="checkout-title">WISHLIST</h1>
      <div className="checkout-header">
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
        <div className="add-to-cart-block">
          <span>Add To Cart</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {wishlistItems.map((item) => (
        <WishlistItem cartItem={item} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistItems,
  wishlistItemsTotal: selectWishlistItemsTotal,
});

export default connect(mapStateToProps)(WishlistPage);
