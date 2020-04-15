import React, { Component } from "react";

import SHOP_DATA from "./shop-data";

import ShopCollections from "../../components/shop-collection/shop-collection.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    const { shopData } = this.state;

    return (
      <div className="shop-page">
        {shopData.map(({ id, title, items }) => (
          <ShopCollections key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
