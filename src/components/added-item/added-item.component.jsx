import React from "react";

import "./added-item.styles.scss";

const AddedItem = ({
  item,
  children,
  button,
  increase,
  decrease
}) => {
  const { imageUrl, name, quantity, price } = item;

  return (
  <div className="added-item">
    <div className="image-block">
      <img src={`${imageUrl}`} alt="item" />
    </div>
    <div className="name">{name}</div>
    <div className="quantity">
      <div className="arrow arrow-left" onClick={() => decrease(item)}>&#10094;</div>
      {quantity}
      <div className="arrow" onClick={() => increase(item)}>&#10095;</div>
    </div>
    <div className="price">${price}</div>
    {/* <div className={`
        child-block
        ${button ? 'button' : ''}
      `
    }> */}
    {children}
    {/* </div>     */}
    <div className="remove-button">&#10005;</div>
  </div>
);}

export default AddedItem;