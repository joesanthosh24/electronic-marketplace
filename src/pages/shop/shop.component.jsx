import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop-collections/shop-collections.selectors";

import ShopCollections from "../../components/shop-collection/shop-collection.component";

const ShopPage = ({ shopData }) => (
  <div className="shop-page">
    {shopData.map(({ id, title, items }) => (
      <ShopCollections key={id} title={title} items={items} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopData: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);