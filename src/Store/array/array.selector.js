import { createSelector } from 'reselect';

const selectArrayReducer = (state) => state.array;

export const selectArrayLength = createSelector(
  [selectArrayReducer],
  (array) => array.length
);

export const selectArrayData = createSelector(
  [selectArrayReducer],
  (array) => array.data
);
