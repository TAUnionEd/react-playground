import { combineReducers } from 'redux';

import homeReducer from './App/Home/state';

const appReducer = combineReducers({
  homeReducer,
});

export default appReducer;
