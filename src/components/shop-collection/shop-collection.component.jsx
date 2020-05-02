import React from "react";

import { CollectionContainer, TitleHeader, ItemsContainer } from './shop-collection.styles';

import ShopItem from "../shop-item/shop-item.component";

const ShopCollections = ({ title, items }) => (
  <CollectionContainer>
    <TitleHeader>{title}</TitleHeader>
    <ItemsContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
    </ItemsContainer>
  </CollectionContainer>
);

export default ShopCollections;
