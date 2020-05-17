import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import ShopCollectionOverviewContainer from "../../components/shop-collection-overview/shop-collection-overview.container";
import CategoryPageContainer from "../category/category-page.container";

import { fetchCollectionsStart } from "../../redux/shop-collections/shop-collections.actions";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
