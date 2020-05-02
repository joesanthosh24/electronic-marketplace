import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop-collections/shop-collections.selectors";

import ShopItem from "../../components/shop-item/shop-item.component";

import "./category-page.styles.scss";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
