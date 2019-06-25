import {REGISTER_COMPLETE, REGISTER_REQUEST} from "../../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true,
                type: action.type
            };
        case REGISTER_COMPLETE:
            return {
                ...state,
                isFetching: false,
                type: action.type,
                result: action.payload
            };
        default:
            return state
    }
}