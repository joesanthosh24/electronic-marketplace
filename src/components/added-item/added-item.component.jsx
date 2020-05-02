import React from "react";

import {
  AddedItemContainer,
  ImageContainer,
  Image,
  NameDiv,
  QuantityContainer,
  PriceDiv,
  ArrowDiv,
  RemoveButton,
} from "./added-item.styles";

const AddedItem = ({ item, children, increase, decrease, listType }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <AddedItemContainer>
      <ImageContainer>
        <Image src={`${imageUrl}`} alt="item" />
      </ImageContainer>
      <NameDiv>{name}</NameDiv>
      <QuantityContainer>
        <ArrowDiv
          onClick={() => {
            increase(item, listType);
          }}
        >
          ^
        </ArrowDiv>
        {quantity}
        <ArrowDiv onClick={() => decrease(item, listType)}>
          &#8964;
        </ArrowDiv>
      </QuantityContainer>
      <PriceDiv>${price}</PriceDiv>
      {children}
      <RemoveButton>&#10005;</RemoveButton>
    </AddedItemContainer>
  );
};

export default AddedItem;
