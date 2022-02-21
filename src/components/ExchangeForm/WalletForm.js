import React, {createContext, useEffect, useState} from 'react';
import StyledExchangeForm from './WalletForm.styled';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../../modules/exchange.action';
import { useDispatch } from 'react-redux';
import Input from './../Input/Input';
import Button from './../Button/Button';
import Submit from './../Submit/Submit';
import Dropdown from './../Dropdown/Dropdown';
import {currencyDB} from './../../db';

const WalletForm = () => {
    const initState = {
        curr: '', 
        amount: 0, 
        date:'',
        price:'' 
    }

    const onChange = async e => {
        e.preventDefault();
        await setState({
            ...state, [e.target.name]: e.target.value
        })
        console.log(state)
    }
    
    const [state, setState] = useState(initState);
    const dispatch = useDispatch();
    const handleSubmit =  (e) => {
        console.log('submit')
        e.preventDefault();
        dispatch(getLatesPriceOfCurrAction('PLN')); 
    }
    
    const onChoose = e => {
        e.preventDefault();
        setState({...state, curr: e.target.dataset.code})
    }

    const onInput = e => {
        e.preventdefault();
        console.log('input')
    }

    useEffect(() => {
        if (state.curr && state.date) {
            setState({...state, price: 21});
        }}, [state.date, state.curr])

    return (
        <StyledExchangeForm>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Posiadam</label>
                    <Input id="amount" onChange={onChange} name="amount" value={state.amount}/>
                </div>
                <div>
                    <label htmlFor="curr">W walucie</label>
                    <Dropdown id="curr" items={currencyDB} onChange={onChoose} name="curr" value={state.curr}/>
                </div>
                <div>
                    <label htmlFor="date">Data zakupu</label>
                    <Input id="date" placeholder="RRRR-MM-DD" onChange={onChange} name="date" value={state.date}/>
                </div>
                <div>
                    <label htmlFor="price">Cena zakupu</label>
                    <Input id="price" onChange={onChange} name="price" value={state.price}/>
                </div>
                <Button onClick={()=>setState(initState)}>Wyczyść</Button>
                <Submit type="submit" value="Dodaj">Dodaj</Submit>
            </form>
        </StyledExchangeForm>
    )
}

export default WalletForm;