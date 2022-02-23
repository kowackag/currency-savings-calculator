import {getLatesPriceOfCurrAPI, getPrevPriceOfCurrAPI, exchangeCurrAPI} from './exchange.api';
import types from './exchange.types';

export const loadPriceOfCurrAction = payload => {
    console.log(payload)
    return {
        type: types.LOAD_CURR,
        payload: payload.rates
    }
} 
export const loadPrevPriceOfCurrAction = payload => {
    return {
        type: types.LOAD_PREVCURR,
        payload: {
            date: payload.date,
            rates: payload.rates
        }
    }
} 

export const loadExchangeCurrAction = payload => {
    return {
        type: types.LOAD_EXCHANGE,
        payload : {
            result: payload.result,
            rates:payload.info.rates,
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
             .then(resp=>dispatch(loadPrevPriceOfCurrAction(resp)))
             .catch(err=> dispatch(setErrorAction(err)))
}

export const getExchangeCurrAction = (fromCurr, toCurr, amount) => (dispatch, getState)=> {
    return exchangeCurrAPI(fromCurr, toCurr, amount)
             .then(resp=>dispatch(loadExchangeCurrAction(resp)))
             .catch(err=> dispatch(setErrorAction(err)))
}