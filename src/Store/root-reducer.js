import { combineReducers } from 'redux';
import { arrayReducer } from './array/array.reducer';
import { algoReducer } from './algo/algo.reducer';
import { speedReducer } from './speed/speed.reducer';

export const rootReducer = combineReducers({
  array: arrayReducer,
  algorithm: algoReducer,
  speed: speedReducer,
});
