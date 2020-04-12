import WishListActions from './wishlist.action.types';

const { SET_HIDDEN } = WishListActions;

const INITIAL_STATE = {
    hidden: true
};

const wishListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default wishListReducer;