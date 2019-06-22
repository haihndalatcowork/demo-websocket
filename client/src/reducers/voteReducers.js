import {GET_VOTES, VOTE_COMPLETE, VOTE_REQUEST} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_VOTES:
            return {
                ...state,
                result: action.payload,
                type: action.type
            };
        case VOTE_REQUEST:
            return {
                ...state,
                isFetching: true,
                type: action.type
            };
        case VOTE_COMPLETE:
            return {
                ...state,
                isFetching: false,
                type: action.type
            };
        default:
            return state
    }
}