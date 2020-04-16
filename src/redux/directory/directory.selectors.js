import { createSelector } from "reselect";

const selectDirectory = ({ directory }) => directory;

export const selectSections = createSelector(
  [selectDirectory],
  ({ sections }) => sections
);
