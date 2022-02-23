import { combineReducers } from "redux";
import lsReducer from './modules/localStorage/lsReducer';
import walletReducer from './modules/wallet/wallet.reducer';
import exchangeReducer from './modules/exchangeAPI/exchange.reducer';
// import stackReducer from "./stack.reducer";

const reducers = combineReducers({
    exchange: exchangeReducer,
    wallet: walletReducer
})

export default reducers;