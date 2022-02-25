import React, {useEffect} from 'react';
import StyledWalletTable from './WalletTable.styled';
import {columnsNames} from './../../db';
import { useSelector, useDispatch } from 'react-redux';
import {getLatesPriceOfCurrAction} from './../../modules/exchangeAPI/exchange.action'
import {removeFromWalletAction} from './../../modules/wallet/wallet.action'
import Button from './../Button/Button'

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

    const sumProfit = (copyWalletList.reduce((sum, {profit}) => sum + Number(profit), 0)).toFixed(2);
   
    const handleClick = e => {
        e.preventDefault();
        console.log(e.target)
        dispatch(removeFromWalletAction(e.target.dataset.id))
    }
   
    useEffect(()=>{
        let currList = []
        walletList.forEach(({curr}) => currList.push(curr));
        dispatch(getLatesPriceOfCurrAction(currList.join()));
    },[walletList])
  


    return (
        <StyledWalletTable>
            {walletList.length>0 && <table>
                <thead>
                    <tr>
                        {columnsNames.map((name,ind)=><th key={ind}>{name}</th>)}
                        <th></th>
                    </tr>
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
                        <td><Button className="btn-remove" onClick={handleClick} id={id}>Usuń</Button></td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr> 
                        <td colSpan="6">Oszczędności</td>
                        <td className="sum-profit" colSpan="2">{sumProfit} PLN</td>
                    </tr>
                </tfoot>
            </table>}
        </StyledWalletTable>   
    )
}

export default WalletTable;