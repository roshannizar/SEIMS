import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f
    )
);

export default store;