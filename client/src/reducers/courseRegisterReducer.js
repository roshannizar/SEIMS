import { REGISTER_STUDENT_COURSE } from '../actions/types';

const initialState = {
  acourse:[],
  loading: false  
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTER_STUDENT_COURSE:
        return {
            ...state,
            acourse:[action.payload, ...state.acourse]
        };
        default: return state;
    }
}