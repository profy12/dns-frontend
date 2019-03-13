import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/reducers.js';
import { logger } from 'redux-logger';
import apiMiddleware from '../middlewares/api';

export const store = createStore(reducers, applyMiddleware(logger,apiMiddleware)); 
/*
export const store = createStore(
    combineReducers({
        state: reducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/