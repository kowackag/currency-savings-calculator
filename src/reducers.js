import { combineReducers } from "redux";
import lsReducer from './modules/localStorage/lsReducer';
import exchangeReducer from './modules/exchangeAPI/exchange.reducer'
// import stackReducer from "./stack.reducer";

const reducers = combineReducers({
    exchange: exchangeReducer,
    ls: lsReducer
})

export default reducers;