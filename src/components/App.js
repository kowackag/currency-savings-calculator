import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../modules/exchange.action';
import WalletForm from './ExchangeForm/WalletForm';
import StyledApp from './App.styled';

const App = () => {
    // const latestPrice = useSelector(props=>props.latestPrice);

    // console.log(latestPrice)
    return(
        <StyledApp>
            <h1>Kalkulator oszczędności walutowych</h1>
            <WalletForm/>
        </StyledApp>

    )
}
export default App;