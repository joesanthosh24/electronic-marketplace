import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "../../redux/shop-collections/shop-collections.selectors";

import ShopCollections from "../../components/shop-collection/shop-collection.component";

const ShopCollectionOverview = ({ shopCollections }) => {
  return (
    <div className="collections-overview">
      {shopCollections.map(({ id, title, items }) => (
        <ShopCollections key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCollections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(ShopCollectionOverview);