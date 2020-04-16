import React from "react";

import "./shop-collection.styles.scss";

import ShopItem from "../shop-item/shop-item.component";

const ShopCollections = ({ title, items }) => (
  <div className="collection">
    <h1 className="title">{title}</h1>
    <div className="items">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
    </div>
  </div>
);

export default ShopCollections;
