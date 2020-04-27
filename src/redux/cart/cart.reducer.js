import { CartActionTypes } from "./cart.action.types";

import { addItem, decreaseQuantity } from "../shared/items.utils";

const INITIAL_STATE = {
  items: [],
};

const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DECREASE_QUANTITY,
} = CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      console.log(state.items);
      return {
        ...state,
        items: addItem(state.items, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case DECREASE_QUANTITY:
        return {
            ...state,
            items: decreaseQuantity(state.items, action.payload)
        }
    default:
      return state;
  }
};

export default cartReducer;