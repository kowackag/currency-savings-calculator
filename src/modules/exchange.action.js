import {getLatesPriceOfCurrAPI, getPrevPriceOfCurrAPI, exchangeCurrAPI} from './exchange.api';
import types from './exchange.types';

export const loadPriceOfCurrAction = payload => {
    return {
        types: types.LOAD_CURR,
        payload: payload.rates
    }
} 

export const loadExchangeCurrAction = payload => {
    return {
        types: types.LOAD_EXCHANGE,
        payload : {
            result: payload.result,
            rate:payload.info.rate,
        }
    }
}

export const setErrorAction = err =>{
    return {
        type: types.SET_ERROR,
        payload: err
    }
}

export const getLatesPriceOfCurrAction = (curr) => (dispatch, getState)=> {
   return getLatesPriceOfCurrAPI(curr)
            .then(resp=>dispatch(loadPriceOfCurrAction(resp)))
            .catch(err=> dispatch(setErrorAction(err)))
}

export const getPrevPriceOfCurrAction = (curr, date) => (dispatch, getState)=> {
    return getPrevPriceOfCurrAPI(curr, date)
             .then(resp=>dispatch(loadPriceOfCurrAction(resp)))
             .catch(err=> dispatch(setErrorAction(err)))
}

export const getExchangeCurrAction = (fromCurr, toCurr, amount) => (dispatch, getState)=> {
    return exchangeCurrAPI(fromCurr, toCurr, amount)
             .then(resp=>dispatch(loadExchangeCurrAction(resp)))
             .catch(err=> dispatch(setErrorAction(err)))
}