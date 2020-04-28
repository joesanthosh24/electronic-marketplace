import { ListActionTypes } from "./cart-wishlist.action.types";

import { addItem, decreaseQuantity } from "../shared/items.utils";

const { ADD_ITEM, REMOVE_ITEM, DeCREASE_QUANTITY } = ListActionTypes;

const INITIAL_STATE = {
  cartItems: [],
  wishlistItems: [],
};

export const cartWishlistReducer = (state = INITIAL_STATE, action) => {
  const item = action.payload.item ? action.payload.item : null;

  switch (action.type) {
    case ADD_ITEM:
      const { listToAddTo } = action.payload;
      return {
        ...state,
        [listToAddTo]: addItem(state[listToAddTo], item),
      };
    case REMOVE_ITEM:
      const {  listToRemoveFrom } = action.payload;
      return {
        ...state,
        [listToRemoveFrom]: state[listToRemoveFrom].filter(listItem => listItem.id !== item.id)
      };
    case DeCREASE_QUANTITY:
      const { listToDecreaseFrom } = action.payload;
      return {
        ...state,
        [listToDecreaseFrom]: decreaseQuantity(state[listToDecreaseFrom], item)
      };
    default:
      return state;
  }
};