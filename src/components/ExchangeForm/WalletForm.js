import React, {useState} from 'react';
import StyledExchangeForm from './WalletForm.styled';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../../modules/exchange.action';
import { useDispatch } from 'react-redux';
import Input from './../Input/Input';
import Button from './../Button/Button';
import Submit from './../Submit/Submit';

const WalletForm = () => {
    const initState = {
        curr: '', 
        amount: 0, 
        date:'',
        price:'' 
    }

    const onChange = e => {
        e.preventDefault();
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const [state, setState] = useState(initState)
    const dispatch = useDispatch();

    const handleSubmit =  (e) => {
        e.preventDefault();
        // dispatch(getLatesPriceOfCurrAction('USD')); 
    }
    
    return (
        <StyledExchangeForm>
            <form onSubmit={handleSubmit}>
               
                    <div>
                        <label htmlFor="amount">Posiadam</label>
                        <Input id="amount" onChange={onChange} name="amount" value={state.amount}/>
                    </div>
                    <div>
                        <label htmlFor="curr">W walucie</label>
                        <Input id="curr" onChange={onChange} name="curr" value={state.curr}/>
                    </div>
                    <div>
                        <label htmlFor="date">Data zakupu</label>
                        <Input id="date" placeholder="RRRR-MM-DD" onChange={onChange} name="date" value={state.date}/>
                    </div>
                    <div>
                        <label htmlFor="price">Cena zakupu</label>
                        <Input id="price" onChange={onChange} name="price"  value={state.price}/>
                    </div>
                    <Button>Wyczyść</Button>
                    <Submit type="submit">Dodaj</Submit>
            </form>
        </StyledExchangeForm>
    )
}

export default WalletForm;
