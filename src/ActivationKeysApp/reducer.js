const initialState = {
    modal: {},
    items: [],
    maxCount: 0,
    state: {
        loading: false
    }
};

export default function ApplicationKeyAppReducer(state = initialState, {type, payload}) {
    if (type === 'ADD_KEY') {
        let newItems = [payload, ...state.items];
        return {...state, items: newItems, maxCount: state.maxCount + 1};
    } else if (type === 'LOAD_KEYS_LIST') {
        return {...state, items: [...state.items, ...payload.items], maxCount: payload.count};
    } else if (type === 'LOAD_ALL_KEYS_LIST') {
        return {...state, items: payload.items, maxCount: payload.count};
    } else if (type === 'SET_LOADING') {
        return {...state, state: { loading: true }};
    } else if (type === 'UNSET_LOADING') {
        return {...state, state: { loading: false }};
    } else if (type === 'DISABLE_KEY') {
        return {...state, items: state.items.map((item, index) => {
            if (Number(payload) === Number(item.id)) {
                item.status = 0;
                return {...item};
            }
            return item;
        })}
    } else if (type === 'ENABLE_KEY') {
        return {...state, items: state.items.map((item, index) => {
            if (Number(payload) === Number(item.id)) {
                item.status = 1;
                return {...item};
            }
            return item;
        })}        
    } else if (type === 'UPDATE_KEY') {
        return {...state, items: state.items.map((item, index) => {
            if (Number(payload.id) === Number(item.id)) {
                item.price = payload.price;
                item.pay_count = payload.cnt;
                item.user_profile = payload.user_profile;
                return {...item};
            }
            return item;
        })}
    } else if (type === 'DELETE_KEY') {
        for (let i = 0; i < state.items.length; i++) {
            if (Number(state.items[i].id) === Number(payload)) {
                state.items.splice(i, 1);
                break;
            }
        }
        return {...state, items: [...state.items]}
    } else if (type === 'SET_MODAL_DATA') {
        return {...state, modal: {...payload}};
    }
    return state;
}
