import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feedbackReducer = (state={}, action) => {
    if (action.type === 'SET_FEEDBACK') {
        return {...state, ...action.payload};
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return {};
    }
    return state;
}

const adminReducer = (state=[], action) => {
    if(action.type === 'SET_FEEDBACK_LIST') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        adminReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
