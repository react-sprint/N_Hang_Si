import { combineReducers } from 'redux';
import rank from './rank';
import status from './status';
import game from './game';

const rootReducer = combineReducers({ rank, status, game });

export default rootReducer;
