import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/user.reducer";
import sectionReducer from "./sections/sections.reducer";
import shopCollectionsReducer from "./shop-collections/shop-collections.reducer";
import cartWishlistReducer from "./cart-wishlist/cart-wishlist.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['listItems']
}

const rootReducer = combineReducers({
  user: userReducer,
  directory: sectionReducer,
  shop: shopCollectionsReducer,
  listItems: cartWishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);