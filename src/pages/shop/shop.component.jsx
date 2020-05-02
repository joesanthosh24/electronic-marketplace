import React from "react";
import { Route } from 'react-router-dom';

import ShopCollectionOverview from '../../components/shop-collection-overview/shop-collection-overview.component';

import CategoryPage from '../category/category-page.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={ShopCollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;