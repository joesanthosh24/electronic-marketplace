import WishListActions from './wishlist.action.types';

const { SET_HIDDEN, ADD_ITEM } = WishListActions;

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const wishListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_HIDDEN:
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
    }
};

export default wishListReducer;