import { CartActionTypes } from './cart.action.types';

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartActionTypes;

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    };
}

export default cartReducer;