const initialState = [];

export default function ApplicationKeyAppReducer(state = initialState, {type, payload}) {
    if (type === 'LOAD_KEYS_LIST') {
        return [...payload];
    }
    return [...state];
}
