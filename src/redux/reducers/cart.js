const initialState = [];
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case "addItem":
            return [
                ...state,
                { ...action.data, quantity: 1 }
            ];
        case "removeItem":
            return state.filter(p => p.id !== action.data?.id);
        case "setQuantity":
            let index = state.findIndex(el => el.id === action.data?.product?.id);
            if (index !== -1) {
                let product = state[index];
                state[index] = { ...product, quantity: action.data?.quantity }
            }
            return state;
        default:
            return state;
    }
};