import { CartActionTypes } from './cart.action.types';

import { addItemToDropDown } from '../shared/dropdown.utils'

const INITIAL_STATE = {
    items: []
};

const { ADD_ITEM_TO_CART } = CartActionTypes;

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
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