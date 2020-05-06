import {
  FETCH_COLECTIONS_START,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop-collections.types";

const INTIAL_STATE = {
  itemCollections: null,
  isFetching: false,
  errorMsg: undefined,
};

const shopCollectionsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        itemCollections: action.payload,
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default shopCollectionsReducer;
