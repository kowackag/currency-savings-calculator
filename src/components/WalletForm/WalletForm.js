import React, {createContext, useEffect, useState} from 'react';
import StyledExchangeForm from './WalletForm.styled';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../../modules/exchangeAPI/exchange.action';
import { getToday } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Submit from '../Submit/Submit';
import Dropdown from '../Dropdown/Dropdown';
import {currencyDB} from '../../db';

const WalletForm = () => {
    const initState = {
        curr: '', 
        amount: 0, 
        date:'',
        price:''
    }

    const today = getToday();
    const [state, setState] = useState(initState);
    const dispatch = useDispatch();
    const price = useSelector(props=>props.exchange.prevPrice.rates)['USD'];
    console.log(price)
    const onChange = e => {
        e.preventDefault();
        setState({...state, [e.target.name]: e.target.value
        })
    }
        
    const handleSubmit =  (e) => {
        e.preventDefault();
    }
    

// --------------WERSJA 1----------------

    const onChoose = e => {
        e.persist();
        setState({...state, curr: e.target.dataset.code})
    }

    // useEffect(()=> {
    //     if (state.date && state.curr) {
    //         dispatch(getPrevPriceOfCurrAction(state.curr, state.date))
    //         setState({...state, price: price}) 
    //         // dispatch(getPrevPriceOfCurrAction(state.curr, state.date)).then(()=> setState({...state, price: price}) ) 
    //     }
    // }, [state.curr, state.date])


// --------------WERSJA 2---------------- -< podobnie do onChange----
         
    // const onChoose = e => {
    //         e.persist();
    //         if (state.date) {
    //             dispatch(getPrevPriceOfCurrAction(e.target.dataset.code, state.date))
    //             setState({...state, price: price, curr: e.target.dataset.code})
    //         } else {setState({...state, curr: e.target.dataset.code})}
    // }

    return (
        <StyledExchangeForm>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label htmlFor="amount">Posiadam</label>
                    <Input type="number" step=".01" id="amount" onChange={onChange} name="amount" value={state.amount}/>
                </div>
                <div className="box">
                    <label>Waluta</label>
                    <Dropdown items={currencyDB} onChange={onChoose} name="curr" value={state.curr}/>
                </div>
                <div className="box">
                    <label htmlFor="date">Data zakupu</label>
                    <Input type="date" id="date" max={today} onChange={onChange} name="date" value={state.date}/>
                </div>
                <div className="box">
                    <label htmlFor="price">Cena zakupu</label>
                    <Input type="number" step=".001" id="price" onChange={onChange} name="price" value={state.price}/>
                </div>
                <Button onClick={()=>setState(initState)}>Wyczyść</Button>
                <Submit type="submit" value="Dodaj">Dodaj</Submit>
            </form>
        </StyledExchangeForm>
    )
}

export default WalletForm;