import {
  FETCH_COLECTIONS_START,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop-collections.types";

import {
  firestore,
  collectionsSnapshotToMapConvertion,
} from "../../firebase/firebase.utils";

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
  return (dispatch) => {
    const collectionReference = firestore.collection("collections");
    dispatch(fetchCollectionsStart);

    collectionReference
      .get()
      .then((snapshot) => {
        const collectionsMap = collectionsSnapshotToMapConvertion(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCOllectionsFailure(err.message)));
  };
};
