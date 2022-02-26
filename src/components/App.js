import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../modules/exchangeAPI/exchange.action';
import WalletForm from './WalletForm/WalletForm';
import StyledApp from './App.styled';
import WalletTable from './WalletTable/WalletTable';
const App = () => {
    return(
        <StyledApp>
            <h1>Kalkulator oszczędności walutowych</h1>
            <WalletForm/>
            <WalletTable/>
        </StyledApp>

    )
}
export default App;