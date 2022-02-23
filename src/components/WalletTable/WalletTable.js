import React, {useEffect} from 'react';
import StyledWalletTable from './WalletTable.styled';
import {columnsNames} from './../../db';
import { useSelector } from 'react-redux';


const WalletTable = () => {

   
    useEffect(()=>{
      
    },[])
    
    const walletList = useSelector(state=> state.wallet);
 

    return (
        <StyledWalletTable>
            <table>
                <thead>
                    <tr>{columnsNames.map((name,ind)=><th key={ind}>{name}</th>)}</tr>
                </thead>
                <tbody>
                    {walletList.map(({id, curr, amount, date, price}) => 
                    <tr key={id}>
                        <td>{curr}</td>
                        <td>{amount}</td>
                        <td>{date}</td>
                        <td>{price}</td>
                        <td>{amount}</td>
                        <td>{amount}</td>
                        <td>{amount}</td>
                    </tr>)}
                </tbody>
            </table>
        </StyledWalletTable>   
    )
}

export default WalletTable;