import { takeLatest, all, call, put } from "redux-saga/effects";

import { SIGN_OUT_SUCCESS } from "../user/user.actions.types";

import { clearCart } from "./cart-wishlist.actions";

export function* clearCartOnSignoutSuccess() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
 yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignoutSuccess)
}

export function* cartWishlistSagas() {
  yield all([call(onSignOutSuccess)]);
}