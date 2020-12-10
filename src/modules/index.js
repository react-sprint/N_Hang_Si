import { combineReducers } from 'redux';
import rank from './rank';
import status from './status';
import likes from './likes';

const rootReducer = combineReducers({ rank, status, likes });

export default rootReducer;
