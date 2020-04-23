import { CartActionTypes } from './cart.action.types';

import { addItem } from '../shared/items.utils';

const INITIAL_STATE = {
    items: []
};

const { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } = CartActionTypes;

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: addItem(state.items, action.payload)
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload.id)
            }
        default:
            return state;
    };
}

export default cartReducer;