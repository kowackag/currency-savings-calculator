import types from './wallet.types';

const initState = [];

const walletReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TO_WALLET:
      return [...state, action.payload];
    case types.REMOVE_FROM_WALLET:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};

export default walletReducer;
