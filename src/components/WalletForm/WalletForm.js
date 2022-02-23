import React, {useEffect, useState} from 'react';
import StyledExchangeForm from './WalletForm.styled';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction} from '../../modules/exchangeAPI/exchange.action';
import { addToWalletAction } from '../../modules/wallet/wallet.action';
import { getToday } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Submit from '../Submit/Submit';
import Dropdown from '../Dropdown/Dropdown';
import {currencyDB} from '../../db';
import validateData from '../../validate';
import {v4 as uuid} from 'uuid';

const WalletForm = () => {
    const initState = {
        curr: '', 
        amount: 0, 
        date:'',
        price:''
    }
    // const [getItem, setItem] = useStorage();

    const today = getToday();
    const [state, setState] = useState(initState);
    
    const dispatch = useDispatch();
    const prices = useSelector(props=>props.exchange.prevPrice.rates);
    const price = (prices['PLN']/prices[state.curr]).toFixed(6);
    
    const [error, setError] = useState({});
    const {currErr,amountErr, dateErr, priceErr} = error;
    
    const onChange = e => {
        e.preventDefault(); 
        if (e.target.name === 'date')  {
            const err = validateData({[e.target.name]: e.target.value});
            setError({...err});
        }
        setState({...state, [e.target.name]: e.target.value
        })
    }
        
    const handleSubmit =  (e) => {
        e.preventDefault();
        const err = validateData(state);
        setError({...err})
        console.log(Object.keys(err).length)
        if (Object.keys(err).length === 0) {
            console.log('ddd')
            dispatch(addToWalletAction({...state, id:uuid()}));
            setState(initState);
        } 
    }
    
    const onChoose = e => {
        e.persist();
        setState({...state, curr: e.target.dataset.code})
    }

    useEffect(()=> {
        if (state.date && state.curr) {
            dispatch(getPrevPriceOfCurrAction(state.curr, state.date))
        }
    }, [state.curr, state.date])

    useEffect(()=> {
        setState({...state, price: price}) 
    }, [price])


    return (
        <StyledExchangeForm>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label className="label" htmlFor="amount">Posiadam</label>
                    <Input type="number" step=".01" min="0" id="amount" onChange={onChange} name="amount" value={state.amount}/>
                    {amountErr&&<p className="err">{amountErr}</p>}
                </div>
                <div className="box">
                    <label className="label" >Waluta</label>
                    <Dropdown items={currencyDB} onChange={onChoose} name="curr" value={state.curr}/>
                    {currErr&&<p className="err">{currErr}</p>}
                </div>
                <div className="box">
                    <label className="label" htmlFor="date">Data zakupu</label>
                    <Input type="date" id="date" max={today} onChange={onChange} name="date" value={state.date}/>
                    {dateErr&&<p className="err">{dateErr}</p>}
                </div>
                <div className="box">
                    <label className="label" htmlFor="price">Cena zakupu</label>
                    <Input type="number" step=".00001" id="price" onChange={onChange} name="price" min="0" value={state.price}/>
                    {priceErr&&<p className="err">{priceErr}</p>}
                </div>
                <Button onClick={()=>setState(initState)}>Wyczyść</Button>
                <Submit type="submit" value="Dodaj">Dodaj</Submit>
            </form>
        </StyledExchangeForm>
    )
}

export default WalletForm;