import { combineReducers } from 'redux';
import listState from './listReducer';
import searchState from './searchReducer';

const rootReducer = combineReducers({
 listState,
 searchState,
});

export default rootReducer;
