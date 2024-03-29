import types from './exchange.types';

const initState = {
  latestPrice: '',

  prevPrice: {
    date: '',
    rates: {},
  },

  error: '',
};

const reducerAPI = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_CURR: {
      return { ...state, latestPrice: { ...action.payload }, error: '' };
    }
    case types.LOAD_PREVCURR: {
      return {
        ...state,
        prevPrice: {
          date: action.payload.date,
          rates: { ...action.payload.rates },
        },
        error: '',
      };
    }
    case types.LOAD_EXCHANGE: {
      return { ...state };
    }
    case types.SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default reducerAPI;
