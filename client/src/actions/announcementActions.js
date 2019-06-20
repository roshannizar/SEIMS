import axios from 'axios';

import { PROGRAM_LOADING, GET_ANNOUNCE } from './types';

export const getAnnounce = () => dispatch => {
    dispatch(setProgramLoading());
    axios.get('/api/announcement/').then(res => dispatch({
        type: GET_ANNOUNCE,
        payload:res.data
    })).catch(err => dispatch({
        type: GET_ANNOUNCE,
        payload:null
    }));
};

export const setProgramLoading = () => {
    return {
        type: PROGRAM_LOADING
    };
};