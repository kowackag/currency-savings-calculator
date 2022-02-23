import types from './wallet.types'

const initState = []


const walletReducer = (state=initState, action) => {
    switch (action.type) {
        case types.ADD_TO_WALLET: 
            return [...state, action.payload];
        // case types.REMOVE_FROM_WALLET: 
        //     return [...state, state.filter()];
        default: 
        return state;
    }
}

export default walletReducer;