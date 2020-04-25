import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import { createStructuredSelector } from "reselect";

import AddedItem from "../added-item/added-item.component";

const CheckoutItem = ({ cartItem }) => {
  return <AddedItem item={cartItem} />;
};

export default CheckoutItem;
