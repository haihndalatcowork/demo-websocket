import axios from "axios";
import {REGISTER_COMPLETE, REGISTER_REQUEST} from "../../actions/types";

export const register = (user) => dispatch => {
    dispatch({type: REGISTER_REQUEST});
    axios.post('http://localhost:5000/register', user)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: REGISTER_COMPLETE,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};