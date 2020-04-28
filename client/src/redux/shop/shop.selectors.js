import { createSelector } from "reselect";

const selectShop = ({ shop }) => shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  ({ collections }) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShop], ({ collections }) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  ({ isFetching }) => isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  ({ collections }) => !!collections
);
