import { shopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
  payload,
});

export const fetchCollectionsSuccess = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload,
});

export const fetchCollectionsFailure = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload,
});

export const fetchCollectionStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error)));
};
