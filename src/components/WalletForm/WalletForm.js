import React, { useEffect, useState } from 'react';
import StyledExchangeForm from './WalletForm.styled';
import { getPrevPriceOfCurrAction } from '../../modules/exchangeAPI/exchange.action';
import { addToWalletAction } from '../../modules/wallet/wallet.action';
import { getToday } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Submit from '../Submit/Submit';
import Dropdown from '../Dropdown/Dropdown';
import { currencyDB } from '../../db';
import validateData from '../../validate';
import { v4 as uuid } from 'uuid';

const WalletForm = () => {
  const initState = {
    curr: '',
    amount: 0,
    date: '',
    price: 0,
  };

  const today = getToday();
  const [state, setState] = useState(initState);
  const { curr, amount, date, price } = state;
  const [error, setError] = useState({});
  const { currErr, amountErr, dateErr, priceErr } = error;

  const dispatch = useDispatch();
  const prices = useSelector((props) => props.exchange.prevPrice.rates);
 
  useEffect(() => {
    if (curr && date) {
      setState({
        ...state,
        price: (prices['PLN'] / prices[curr]).toFixed(6),
      });
    }
  }, [curr, prices]);

  useEffect(() => {
    if (date && curr) {
      dispatch(getPrevPriceOfCurrAction(curr, date));
    }
  }, [dispatch, curr, date]);

  const onChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateData(state);
    setError({ ...err });
    if (Object.keys(err).length === 0) {
      dispatch(addToWalletAction({ ...state, id: uuid() }));
      setState(initState);
    }
  };

  const onChoose = (e) => {
    e.persist();
    setState({ ...state, curr: e.target.dataset.code });
  };

  return (
    <StyledExchangeForm>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label className="label" htmlFor="amount">
            Posiadam
          </label>
          <Input
            type="number"
            step=".01"
            min="0"
            id="amount"
            onChange={onChange}
            name="amount"
            value={amount}
          />
          {amountErr && <p className="err">{amountErr}</p>}
        </div>
        <div className="box">
          <label className="label">
            Waluta
            <Dropdown
              id="currency"
              items={currencyDB}
              onChange={onChoose}
              name="curr"
              value={curr}
            />
          </label>
          {currErr && <p className="err">{currErr}</p>}
        </div>
        <div className="box">
          <label className="label" htmlFor="date">
            Data zakupu
          </label>
          <Input
            type="date"
            id="date"
            max={today}
            onChange={onChange}
            name="date"
            value={date}
          />
          {dateErr && <p className="err">{dateErr}</p>}
        </div>
        <div className="box">
          <label className="label" htmlFor="price">
            Cena zakupu
          </label>
          <Input
            type="number"
            step=".000001"
            id="price"
            onChange={onChange}
            name="price"
            min="0"
            value={price}
          />
          {priceErr && <p className="err">{priceErr}</p>}
        </div>
        <Button onClick={() => setState(initState)}>Wyczyść</Button>
        <Submit type="submit" value="Dodaj">
          Dodaj
        </Submit>
      </form>
    </StyledExchangeForm>
  );
};

export default WalletForm;
