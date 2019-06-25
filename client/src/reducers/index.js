import { combineReducers } from 'redux';
import voteReducer from './voteReducers';
import registerReducer from '../modules/register/reducers';
export default combineReducers({
    votes: voteReducer,
    register: registerReducer
});