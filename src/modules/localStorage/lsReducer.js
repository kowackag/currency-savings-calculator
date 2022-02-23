const initState = {
    wallet: [{ curr: '', amount: 0, date:'', prevPrice:'' }],
}

const lsReducer = (state=initState, action) => {
    switch (action.type) {
        case 'LS_ADD':
            const copyState = {curr: '', amount: 0, date:'', prevPrice:'' }
            return {...state, wallet: [...state.wallet, copyState] };
        default:
            return state;
    }
}
export default lsReducer; 

