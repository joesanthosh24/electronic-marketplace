import { CartActionTypes } from './cart.action.types';

const { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, DECREASE_QUANTITY } = CartActionTypes;

export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    payload: item
});

export const removeItemFromCart = item => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
});

export const decreaseQuantity = item => ({
    type: DECREASE_QUANTITY,
    payload: item
})