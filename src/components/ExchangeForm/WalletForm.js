import React, {useState} from 'react';
import StyledExchangeForm from './WalletForm.styled';
import {getLatesPriceOfCurrAction, getPrevPriceOfCurrAction, getExchangeCurrAction} from '../../modules/exchange.action';
import { useDispatch } from 'react-redux';

const WalletForm = () => {
    const initState = {
        curr: '', 
        amount: 0, 
        date:'',
        price:'' 
    }

    const [state, setState] = useState(initState)
    const dispatch = useDispatch();

    const handleSubmit =  (e) => {
        e.preventDefault();
        // dispatch(getLatesPriceOfCurrAction('USD')); 
    }
    
    return (
        <StyledExchangeForm>
            <h2>Dodaj do portfela</h2>
            <form onSubmit={handleSubmit}>
                <div> 
                    <div>
                        <label htmlFor="amount">Posiadam</label>
                        <input id="amount" onChange ="onChange" name="amount" value={state.amount}/>
                    </div>
                    <div>
                        <label htmlFor="curr">W walucie</label>
                        <input id="curr" onChange ="onChange" name="curr" value={state.curr}/>
                    </div>
                    <div>
                        <label htmlFor="date">Data zakupu</label>
                        <input id="date" placeholder="RRRR-MM-DD" onChange ="onChange" name="date" value={state.date}/>
                    </div>
                    <div>
                        <label htmlFor="price">Cena zakupu</label>
                        <input id="price" onChange ="onChange" name="price"  value={state.price}/>
                    </div>
                </div>
                <div>
                    <button>Wyczyść</button>
                    <button>Dodaj do portfela</button>
                </div>
            </form>
        </StyledExchangeForm>
    )
}

export default WalletForm;
