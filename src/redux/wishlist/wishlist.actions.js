import WishListActions from './wishlist.action.types';

const { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } = WishListActions;

export const addItemToWishlist = item => ({
    type: ADD_ITEM_TO_WISHLIST,
    payload: item
});

export const removeItemsFromWishlist = item => ({
    type: REMOVE_ITEM_FROM_WISHLIST,
    payload: item
});