import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

import { ReactComponent as Heart } from "../../assets/heart.svg";

import "./wishlist-icon.styles.scss";
import { selectWishlistItemsCount } from "./../../redux/wishlist/wishlist.selectors";

const WishListIcon = ({ itemCount, history }) => {
  return (
    <div className="wishlist-icon" onClick={() => history.push('/wishlist')}>
      <Heart className={`${itemCount > 0 ? 'shaded':''} heart`} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectWishlistItemsCount,
});

export default withRouter(connect(mapStateToProps)(WishListIcon));