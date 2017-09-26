const initialState = {
    modal: {},
    keys: []
};

export default function ApplicationKeyAppReducer(state = initialState, {type, payload}) {
    if (type === 'LOAD_KEYS_LIST') {
        return {...state, keys: [...payload]};
    } else if (type === 'SET_MODAL_DATA') {
        return {...state, modal: {...payload}};
    }
    return [...state];
}
