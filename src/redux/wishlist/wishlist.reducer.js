import WishListActions from './wishlist.action.types';

import { addItemToDropDown } from '../shared/dropdown.utils';

const { SET_HIDDEN, ADD_ITEM_TO_WISHLIST } = WishListActions;

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const wishListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM_TO_WISHLIST:
            return {
                ...state,
                items: addItemToDropDown(state.items, action.payload)
            }
        default:
            return state;
    }
};

export default wishListReducer;