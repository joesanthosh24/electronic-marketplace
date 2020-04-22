import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Heart } from "../../assets/heart.svg";

import "./wishlist-icon.styles.scss";
import { selectWishlistItemsCount } from "./../../redux/wishlist/wishlist.selectors";

const WishListIcon = ({ itemCount }) => {
  const handleClick = () => {};

  return (
    <div className="wishlist-icon" onClick={handleClick}>
      <Heart className={`${itemCount > 0 ? 'shaded':''} heart`} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectWishlistItemsCount,
});

export default connect(mapStateToProps)(WishListIcon);
