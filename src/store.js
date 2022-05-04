import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const preloadedState = JSON.parse(localStorage.getItem('savings')) || undefined;

const store = createStore(reducers,preloadedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem('savings', JSON.stringify(state))
})

export default store;