import {
    GET_COURSE,
    GET_COURSES,
    PROGRAM_LOADING,
    CLEAR_CURRENT_COURSE
} from '../actions/types';

const initialState = {
    course: null,
    courses: null,
    loading: false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROGRAM_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_COURSE:
            return {
                ...state,
                course: action.payload,
                loading: false
            };
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_COURSE:
            return {
                ...state,
                course: null
            };
        default:
            return state;
    }
}