import { createSelector } from "reselect";

import { getItemsCount, getItemsTotal } from "../shared/items.utils";

const selectLists = (state) => state.listItems;

export const selectCartItems = createSelector(
  [selectLists],
  (lists) => {
    return lists.cartItems
  }
);

export const selectWishlistItems = createSelector(
  [selectLists],
  (lists) => lists.wishlistItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => getItemsCount(cartItems)
);

export const selectWishlistItemsCount = createSelector(
  [selectWishlistItems],
  (wishlistItems) => getItemsCount(wishlistItems)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) => getItemsTotal(cartItems)
);

export const selectWishlistItemsTotal = createSelector(
  [selectWishlistItems],
  (wishlistItems) => getItemsTotal(wishlistItems)
);