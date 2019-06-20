import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import courseReducer from './courseReducer';
import announceReducer from './announceReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    course: courseReducer,
    announce: announceReducer
});