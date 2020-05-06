import React, { Component } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import ShopCollectionOverview from "../../components/shop-collection-overview/shop-collection-overview.component";
import Spinner from "../../components/spinner/spinner.component";

import CategoryPage from "../category/category-page.component";

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop-collections/shop-collections.selectors";

import { fetchCollectionsStartAsync } from "../../redux/shop-collections/shop-collections.actions";

const ShopCollectionOverviewWithSpinner = Spinner(ShopCollectionOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetchingCollection, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <ShopCollectionOverviewWithSpinner
              isLoading={isFetchingCollection}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
