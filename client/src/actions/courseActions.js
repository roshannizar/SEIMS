import axios from 'axios';

import { PROGRAM_LOADING, GET_COURSES, GET_COURSE, GET_ERRORS } from './types';

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

export const getCourseSelected = user_id => dispatch => {
    dispatch(setProgramLoading());
    axios.get(`/api/student/user/${user_id}`).then(res => dispatch({
        type: GET_COURSE,
        payload:res.data
    })).catch(err => dispatch({
        type:GET_COURSE,
        payload:null
    }));
};

export const setCourse = (id,data) => dispatch => {
    axios.post(`/api/student/course/${id}`,data).then( res => dispatch({
        payload: res.data
    })).catch(err => dispatch({
        type:GET_ERRORS,
        payload: null
    }));
};

export const setProgramLoading = () => {
    return {
        type: PROGRAM_LOADING
    };
};