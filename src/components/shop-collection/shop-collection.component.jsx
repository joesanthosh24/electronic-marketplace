import React from "react";

import "./shop-collection.styles.scss";

import ShopItem from '../shop-item/shop-item.component';

const ShopCollections = ({ title, ...otherProps }) => (
  <div className="collection">
    <h1 className="title">{title}</h1>
    <div className="items">
      {otherProps.items.map(({ id, ...otherProps }) => (
        <ShopItem {...otherProps} key={id} />
      ))}
    </div>
  </div>
);

export default ShopCollections;
