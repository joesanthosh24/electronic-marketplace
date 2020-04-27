import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import wishListReducer from './wishlist/wishlist.reducer';
import sectionReducer from './sections/sections.reducer';
import shopCollectionsReducer from './shop-collections/shop-collections.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    wishlist: wishListReducer,
    directory: sectionReducer,
    shop: shopCollectionsReducer
});