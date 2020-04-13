import WishListActions from './wishlist.action.types';

const { SET_HIDDEN, ADD_ITEM } = WishListActions;

export const setListHidden = () => ({
    type: SET_HIDDEN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})