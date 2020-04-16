import { CartActionTypes } from './cart.action.types';

import { addItemToDropDown } from '../shared/dropdown.utils'

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } = CartActionTypes;

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: addItemToDropDown(state.items, action.payload)
            }
        default:
            return state;
    };
}

export default cartReducer;