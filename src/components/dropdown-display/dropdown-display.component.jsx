import React from "react";

import Button from "../custom-button/button.component";

import "./dropdown-display.styles.scss";
import DropdownItem from "../dropdown-item/dropdown-item.component";

const DropdownDisplay = ({ title, items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((item) => (
        <DropdownItem item={item} />
      ))}
    </div>
    <Button>SEE {title.toUpperCase()}</Button>
  </div>
);

export default DropdownDisplay;
