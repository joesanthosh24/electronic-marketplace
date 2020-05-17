import { ListActionTypes } from "./cart-wishlist.action.types";

import { addItem, decreaseQuantity } from "../shared/items.utils";

const { ADD_ITEM, REMOVE_ITEM, DECREASE_QUANTITY, CLEAR_CARTS } = ListActionTypes;

const INITIAL_STATE = {
  cartItems: [],
  wishlistItems: [],
};

const cartWishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.listToAddTo]: addItem(
          state[action.payload.listToAddTo],
          action.payload.item
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.listToRemoveFrom]: state[
          action.payload.listToRemoveFrom
        ].filter((listItem) => listItem.id !== action.payload.item.id),
      };
    case DECREASE_QUANTITY:
      console.log(action.payload.item);
      return {
        ...state,
        [action.payload.listToDecreaseFrom]: decreaseQuantity(
          state[action.payload.listToDecreaseFrom],
          action.payload.item
        ),
      };
    case CLEAR_CARTS:
      return {
        ...state,
        cartItems: [],
        wishlistItems: []
      };
    default:
      return state;
  }
};

export default cartWishlistReducer;
