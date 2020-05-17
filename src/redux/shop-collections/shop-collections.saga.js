import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  collectionsSnapshotToMapConvertion,
} from "../../firebase/firebase.utils";

import {
  fetchCOllectionsFailure,
  fetchCollectionsSuccess,
} from "./shop-collections.actions";

import {
  FETCH_COLECTIONS_START,
} from "./shop-collections.types";

export function* fetchCollectionsAsync() {
  yield console.log("In fetch collections async");

  try {
    const collectionReference = firestore.collection("collections");
    const snapshot = yield collectionReference.get();
    const collectionsMap = yield call(
      collectionsSnapshotToMapConvertion,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCOllectionsFailure(err.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(FETCH_COLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)])
}