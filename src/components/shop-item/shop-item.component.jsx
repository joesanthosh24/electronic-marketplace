import React from "react";

import "./shop-item.styles.scss";

const ShopItem = ({ imageUrl, name, price }) => (
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
  </div>
);

export default ShopItem;