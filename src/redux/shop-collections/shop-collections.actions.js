import {
  FETCH_COLECTIONS_START,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop-collections.types";

export const fetchCollectionsStart = () => ({
  type: FETCH_COLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMapping) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMapping,
});

export const fetchCOllectionsFailure = (errorMsg) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionsStartAsync = () => {
  
};
