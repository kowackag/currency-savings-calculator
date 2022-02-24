import React, {useEffect} from 'react';
import StyledWalletTable from './WalletTable.styled';
import {columnsNames} from './../../db';
import { useSelector, useDispatch } from 'react-redux';
import {getLatesPriceOfCurrAction} from './../../modules/exchangeAPI/exchange.action'


const WalletTable = () => {
    const dispatch = useDispatch();
    const walletList = useSelector(state=> state.wallet);
    const latestPriceList = useSelector(state=> state.exchange.latestPrice);
    
    const getLatestPrice = (curr) => {
        return (latestPriceList['PLN']/latestPriceList[curr]).toFixed(6)
    }
             
    const copyWalletList = walletList.map(item => ({
        ...item, 
        latestPrice: getLatestPrice(item.curr),
        value: (getLatestPrice(item.curr)*item.amount).toFixed(2),
        profit: ((getLatestPrice(item.curr)*item.amount).toFixed(2)-(item.amount*item.price)).toFixed(2)
    }))
   
   
    useEffect(()=>{
        let currList = []
        walletList.forEach(({curr}) => currList.push(curr));
        dispatch(getLatesPriceOfCurrAction(currList.join()));
    },[])
  

    return (
        <StyledWalletTable>
            {walletList.length>0 && <table>
                <thead>
                    <tr>{columnsNames.map((name,ind)=><th key={ind}>{name}</th>)}</tr>
                </thead>
                <tbody>
                    {copyWalletList.map(({id, curr, amount, date, latestPrice, value, price, profit}) => 
                    <tr key={id}>
                        <td>{curr}</td>
                        <td>{amount}</td>
                        <td>{date}</td>
                        <td>{price}</td>
                        <td>{latestPrice}</td>
                        <td>{value}</td>
                        <td>{profit}</td>
                    </tr>)}
                </tbody>
            </table>}
        </StyledWalletTable>   
    )
}

export default WalletTable;