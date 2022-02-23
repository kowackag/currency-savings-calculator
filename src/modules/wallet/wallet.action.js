import types from './wallet.types';

export const addToWalletAction = (payload ) => {
    return {
        type: types.ADD_TO_WALLET,
        payload
    }
}


export const removeFromWalletAction = (id) => {
    return {
        type: types.REMOVE_FROM_WALLET,
        payload: id,
    }
}