import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import wishListReducer from "./wishlist/wishlist.reducer";
import sectionReducer from "./sections/sections.reducer";
import shopCollectionsReducer from "./shop-collections/shop-collections.reducer";
import cartWishlistReducer from "./cart-wishlist/cart-wishlist.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishlist: wishListReducer,
  directory: sectionReducer,
  shop: shopCollectionsReducer,
  listItems: cartWishlistReducer,
});