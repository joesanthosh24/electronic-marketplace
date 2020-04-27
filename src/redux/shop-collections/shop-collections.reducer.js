import SHOP_DATA from "../../pages/shop/shop-data";

const INTIAL_STATE = {
  itemCollections: SHOP_DATA,
};

const shopCollectionsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopCollectionsReducer;