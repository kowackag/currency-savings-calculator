import reducerAPI from "./exchange.reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducerAPI, applyMiddleware(thunk));

export default store;