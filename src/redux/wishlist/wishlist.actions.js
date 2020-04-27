import WishListActions from './wishlist.action.types';

const { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST, DECREASE_QUANTITY_IN_WISHLIST_ITEM } = WishListActions;

export const addItemToWishlist = item => ({
    type: ADD_ITEM_TO_WISHLIST,
    payload: item
});

export const removeItemsFromWishlist = item => ({
    type: REMOVE_ITEM_FROM_WISHLIST,
    payload: item
});

export const decreaseQuantity = item => ({
    type: DECREASE_QUANTITY_IN_WISHLIST_ITEM,
    payload: item
});