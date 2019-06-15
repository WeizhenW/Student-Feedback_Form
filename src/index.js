import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
//reducer to hold the individual feedback input
const feedbackReducer = (state={}, action) => {
    //add feedback input into redux state
    if (action.type === 'SET_FEEDBACK') {
        return {...state, ...action.payload};
    } else if (action.type === 'CLEAR_FEEDBACK') {
    //clear all inputs from the redux state
        return {};
    }
    return state;
}
//reducer to hold list of feedback
const adminReducer = (state=[], action) => {
    if(action.type === 'SET_FEEDBACK_LIST') {
        //update the redux state with new list
        return action.payload;
    }
    return state;
}
//create store instance
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        adminReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
