import WishListActions from './wishlist.action.types';

import { addItemToDropDown } from '../shared/dropdown.utils';

const { ADD_ITEM_TO_WISHLIST } = WishListActions;

const INITIAL_STATE = {
    items: []
};

const wishListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
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