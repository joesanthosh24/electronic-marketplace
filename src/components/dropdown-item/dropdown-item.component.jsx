import React from "react";

import './dropdown-item.styles.scss';

const DropdownItem = ({ item: { imageUrl, name, price, quantity } }) => {
  console.log(name);
  return (
    <div className="dropdown-item">
      <img className="dropdown-item-image" src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-amount">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default DropdownItem;
