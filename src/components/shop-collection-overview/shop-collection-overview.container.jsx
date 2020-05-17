import { connect } from "react-redux";
import { compose } from 'redux';
import { createStructuredSelector } from "reselect";

import {
  selectIsCollectionFetching,
} from "../../redux/shop-collections/shop-collections.selectors";

import WithSpinner from "../spinner/spinner.component";
import ShopCollectionOverview from "./shop-collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const ShopCollectionOverviewConainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ShopCollectionOverview);

export default ShopCollectionOverviewConainer;