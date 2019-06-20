import { GET_ANNOUNCE, PROGRAM_LOADING } from '../actions/types';

const initialState = {
    announces: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROGRAM_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ANNOUNCE:
            return {
                ...state,
                announces: action.payload,
                loading: false
            }
        default:
            return state;
    }
}