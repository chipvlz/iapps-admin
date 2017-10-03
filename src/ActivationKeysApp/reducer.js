const initialState = {
    modal: {},
    keys: []
};

export default function ApplicationKeyAppReducer(state = initialState, {type, payload}) {
    if (type === 'LOAD_KEYS_LIST') {
        return {...state, keys: [...payload]};
    } else if (type === 'DISABLE_KEY') {
        return {...state, keys: state.keys.map((item, index) => {
            if (Number(payload) === Number(item.id)) {
                item.status = 0;
                return {...item};
            }
            return item;
        })}
    } else if (type === 'ENABLE_KEY') {
        return {...state, keys: state.keys.map((item, index) => {
            if (Number(payload) === Number(item.id)) {
                item.status = 1;
                return {...item};
            }
            return item;
        })}        
    } else if (type === 'UPDATE_KEY') {
        return {...state, keys: state.keys.map((item, index) => {
            if (Number(payload.id) === Number(item.id)) {
                item.price = payload.price;
                item.pay_count = payload.cnt;
                item.user_profile = payload.user_profile;
                return {...item};
            }
            return item;
        })}
    } else if (type === 'SET_MODAL_DATA') {
        return {...state, modal: {...payload}};
    }
    return state;
}
