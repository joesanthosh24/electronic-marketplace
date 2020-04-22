import WishListActions from './wishlist.action.types';

const { ADD_ITEM_TO_WISHLIST } = WishListActions;

export const addItemToWishlist = item => ({
    type: ADD_ITEM_TO_WISHLIST,
    payload: item
})