import axios from "axios";
import {GET_VOTES, VOTE_COMPLETE, VOTE_REQUEST} from "./types";

export const getVotes = () => dispatch => {
    axios.get('http://localhost:5000/votes')
        .then(res => {
            let dataPoints = [];
            let total = 0;
            res.data.map(item => {
                total += item.count
            });
            res.data.map(item => {
                dataPoints.push({y: (item.count / total) * 100, label: item.name, id: item.id})
            });
            dispatch({
                type: GET_VOTES,
                payload: dataPoints
            });
        })
        .catch(err => console.log(err));
};

export const voteRequest = () => dispatch => {
    dispatch({type: VOTE_REQUEST})
};

export const voteComplete = () => dispatch => {
    dispatch({type: VOTE_COMPLETE})
};

export const voting = () => dispatch => {
    dispatch(voteRequest());
    dispatch(voteComplete());
};