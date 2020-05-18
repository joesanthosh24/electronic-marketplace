import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import ShopCollectionOverviewContainer from "../../components/shop-collection-overview/shop-collection-overview.container";
import CategoryPageContainer from "../category/category-page.container";

import { fetchCollectionsStart } from "../../redux/shop-collections/shop-collections.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={ShopCollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:categoryId`}
        component={CategoryPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
