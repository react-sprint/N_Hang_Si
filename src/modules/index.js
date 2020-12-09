import { combineReducers } from 'redux';
import rank from './rank';
import status from './status';

const rootReducer = combineReducers({ rank, status });

export default rootReducer;
