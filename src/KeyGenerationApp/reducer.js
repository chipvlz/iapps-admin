const initialState = {
    sellers: [],
};

export default function KeyGenerationReducer(state = initialState, {type, payload}) {
    if (type === 'LOAD_SELLERS_LIST') {
        return {...state, sellers: payload};
    }
    return state;
}
