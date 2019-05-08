import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Registered user
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/signup', userData).then(res => history.push('signincomp')).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

//Signin - GET USER TOKEN
export const loginUser = userData => dispatch => {
    axios.post('/api/users/signin', userData).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);

        dispatch(setCurrentUser(decoded));
    }).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

// SET logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log out user
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
