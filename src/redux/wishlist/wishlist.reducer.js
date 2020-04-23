import WishListActions from './wishlist.action.types';

import { addItem } from '../shared/items.utils';

const { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } = WishListActions;

const INITIAL_STATE = {
    items: []
};

const wishListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_WISHLIST:
            return {
                ...state,
                items: addItem(state.items, action.payload)
            }
        case REMOVE_ITEM_FROM_WISHLIST:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default wishListReducer;