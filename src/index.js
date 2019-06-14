import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feedbackObj = {
    feeling: '',
    understanding: '',
    support: '',
    comment: '',
}
const feedbackReducer = (state={}, action) => {
    if (action.type === 'SET_FEEDBACK') {
        return {...state, ...action.payload};
    } 
    return state;
}





const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
