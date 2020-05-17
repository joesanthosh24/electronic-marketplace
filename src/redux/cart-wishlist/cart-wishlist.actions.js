import { ListActionTypes } from "./cart-wishlist.action.types";

const { ADD_ITEM, REMOVE_ITEM, DECREASE_QUANTITY } = ListActionTypes;

export const addItem = (item, listToAddTo) => ({
  type: ADD_ITEM,
  payload: {
    item,
    listToAddTo,
  },
});

export const removeItem = (item, listToRemoveFrom) => ({
  type: REMOVE_ITEM,
  payload: {
    item,
    listToRemoveFrom,
  },
});

export const decreaseQuantity = (item, listToDecreaseFrom) => ({
  type: DECREASE_QUANTITY,
  payload: {
    item,
    listToDecreaseFrom,
  },
});

export const clearCart = () => ({
  type: ListActionTypes.CLEAR_CARTS
})