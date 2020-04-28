import { createSelector } from "reselect";

const selectLists = (state) => state.listItems;

export const selectItems = (listToChoose) =>
  createSelector([selectLists], (lists) => lists[listToChoose]);