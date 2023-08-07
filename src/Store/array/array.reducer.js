import { ARRAY_ACTION_TYPES, makeArray } from './array.types';

const ARRAY_INITIAL_STATE = {
  length: 150,
  data: makeArray(150),
};

export const arrayReducer = (state = ARRAY_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ARRAY_ACTION_TYPES.SET_ARRAY_LENGTH:
      return {
        length: payload,
        data: makeArray(payload),
      };
    case ARRAY_ACTION_TYPES.GENERATE_NEW_ARRAY:
      return {
        ...state,
        data: makeArray(payload),
      };
    default:
      return state;
  }
};
