import WishListActions from './wishlist.action.types';

const { SET_HIDDEN, ADD_ITEM_TO_WISHLIST } = WishListActions;

export const setListHidden = () => ({
    type: SET_HIDDEN
});

export const addItemToWishlist = item => ({
    type: ADD_ITEM_TO_WISHLIST,
    payload: item
})