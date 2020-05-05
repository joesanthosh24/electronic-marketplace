import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import ShopCollectionOverview from "../../components/shop-collection-overview/shop-collection-overview.component";
import Spinner from "../../components/spinner/spinner.component";

import CategoryPage from "../category/category-page.component";

import {
  firestore,
  collectionsSnapshotToMapConvertion,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop-collections/shop-collections.actions";

const ShopCollectionOverviewWithSpinner = Spinner(ShopCollectionOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

class ShopPage extends Component {
  unsubscribeFromAuth = null;
  state = { isLoading: true };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionReference = firestore.collection("collections");

    this.unsubscribeFromAuth = collectionReference.onSnapshot(
      async (snapshot) => {
        const collectionsMap = collectionsSnapshotToMapConvertion(snapshot);
        updateCollections(collectionsMap);

        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <ShopCollectionOverviewWithSpinner
              isLoading={isLoading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
