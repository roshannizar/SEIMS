import axios from 'axios';

import { PROGRAM_LOADING, GET_COURSES } from './types';

export const getCourses = () => dispatch => {
    dispatch(setProgramLoading());
    axios.get('/api/courses/').then(res => dispatch({
        type: GET_COURSES,
        payload: res.data
    }))
        .catch(err => dispatch({
            type: GET_COURSES,
            payload: null
        }));
};

export const setProgramLoading = () => {
    return {
        type: PROGRAM_LOADING
    };
};