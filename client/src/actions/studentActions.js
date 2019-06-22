import axios from 'axios';

import { REGISTER_STUDENT_COURSE, PROGRAM_LOADING, GET_ERRORS } from './types';

export const registerCourse = sdata => dispatch => {
    axios.post('/api/student/acourse', sdata).then(res => dispatch({
        type:REGISTER_STUDENT_COURSE,
        payload:res.data
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



