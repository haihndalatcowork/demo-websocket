import { combineReducers } from 'redux';
import voteReducer from './voteReducers';
export default combineReducers({
    votes: voteReducer
});