import { createSelector } from "reselect";

const selectShop = ({ shop }) => shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  ({ collections }) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShop],
    ({ collections }) => collections[collectionUrlParam]
  );
