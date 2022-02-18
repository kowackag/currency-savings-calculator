import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../modules/exchange.action';

const App = () => {
    const latestPrice = useSelector(props=>props.latestPrice);
    const dispatch = useDispatch();

   const handleSubmit =  (e) => {
        e.preventDefault;
        dispatch(getLatesPriceOfCurrAction('USD')); 
    }
    console.log(latestPrice)
    return(
        <>
            <h1>Kalkulator walutowy</h1>
            {/* <ExchangeForm/> */}
            <form onSubmit={handleSubmit}>
                <input type='submit' value='send'/>
            </form>
        </>

    )
}
export default App;