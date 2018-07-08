import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';

import {createLogger} from 'redux-logger';

import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware
));

console.log(store.getState());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
,

document.getElementById('root'));
registerServiceWorker();
