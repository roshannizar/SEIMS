import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/user/signup', userData).then(res => history.push('/signin')).catch(err=> dispatch({
        type: GET_ERRORS,
        payload:err.response.data
    }));
};

export const loginUser = userData => dispatch => {
    axios.post('/api/user/signin', userData).then(res => {
        const { token } = res.data;

        localStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const decoded = jwt_decode(token);

        dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

export const setCurrentUser = decoded => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);

    dispatch(setCurrentUser({}));
};