import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import counterReducer from './counter';

export const intitialState = Immutable.Map();

export default combineReducers({
    counter: counterReducer,
  });