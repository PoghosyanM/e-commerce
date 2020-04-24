import { shopActionTypes } from "./shop.types";

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
