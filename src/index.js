import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
//import {CookiesProvider} from 'react-cookie'

const middleware = [thunk];

const  saveToLocalStorage = (state)=> {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e);
        return undefined
    }
}

const initState = loadFromLocalStorage();
const store = createStore(
    RootReducer,
    initState,
    applyMiddleware(...middleware));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
store.subscribe(() => saveToLocalStorage({  user: {
          info: store.getState().user.info,
          repos: store.getState().user.repos,
          events: store.getState().user.events,
          orgs: store.getState().user.orgs
        }}));

