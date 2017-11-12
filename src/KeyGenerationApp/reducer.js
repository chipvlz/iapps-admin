const initialState = {
    sellers: [],
    state: {
      generating: false,
    }
};

export default function KeyGenerationReducer(state = initialState, {type, payload}) {
  if (type === 'LOAD_SELLERS_LIST') {
    return {...state, sellers: payload};
  } else if (type === 'SET_GENERATING') {
    return {...state, state: { generating: true }};
  } else if (type === 'UNSET_GENERATING') {
    return {...state, state: { generating: false }};
  }
  return state;
}
