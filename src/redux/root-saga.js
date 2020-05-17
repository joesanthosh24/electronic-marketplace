import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop-collections/shop-collections.saga";
import { userSagas } from "./user/user.sagas";
import { cartWishlistSagas } from "./cart-wishlist/cart-wishlist.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartWishlistSagas)]);
}