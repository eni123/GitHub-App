import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import RootReducer from './reducers/rootReducer';
import thunk from'redux-thunk';

const initState={};
const middleware=[thunk];

const store=createStore(RootReducer,initState,applyMiddleware(...middleware));
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));


