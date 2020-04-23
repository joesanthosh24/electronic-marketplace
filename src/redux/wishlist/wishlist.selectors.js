import { createSelector } from 'reselect'

const selectWishList = (state) => state.wishlist;

export const selectWishlistItems = createSelector(
    [selectWishList],
    wishlist => wishlist.items
);

export const selectWishlistItemsCount = createSelector(
    [selectWishlistItems],
    wishlistItems => wishlistItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectWishlistItemsTotal = createSelector(
    [selectWishlistItems],
    wishlistItems => wishlistItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
);