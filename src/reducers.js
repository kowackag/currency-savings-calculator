import { combineReducers } from 'redux';
import walletReducer from './modules/wallet/wallet.reducer';
import exchangeReducer from './modules/exchangeAPI/exchange.reducer';

const reducers = combineReducers({
  exchange: exchangeReducer,
  wallet: walletReducer,
});

export default reducers;
