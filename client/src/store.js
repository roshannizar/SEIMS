import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initalState,
    compose(
        applyMiddleware(...middleware),
        window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f
    )
);

export default store;