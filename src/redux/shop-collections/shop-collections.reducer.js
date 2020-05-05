import { UPDATE_COLLECTIONS } from './shop-collections.types';

const INTIAL_STATE = {
  itemCollections: [],
};

const shopCollectionsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        itemCollections: action.payload
      }
    default:
      return state;
  }
};

export default shopCollectionsReducer;