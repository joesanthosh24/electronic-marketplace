import { CartActionTypes } from './cart.action.types';

const { ADD_ITEM_TO_CART } = CartActionTypes;

export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})