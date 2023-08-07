import { ARRAY_ACTION_TYPES } from './array.types';
import { createAction } from '../../utils/reducer.utils';

export const setArrayLength = (len) =>
  createAction(ARRAY_ACTION_TYPES.SET_ARRAY_LENGTH, len);

export const generateNewArray = (len) =>
  createAction(ARRAY_ACTION_TYPES.GENERATE_NEW_ARRAY, len);
