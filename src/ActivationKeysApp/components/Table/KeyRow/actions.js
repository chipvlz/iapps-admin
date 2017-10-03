

export const disableKey = (id) => dispatch => {
    dispatch({type: 'DISABLE_KEY', payload: id});
};


export const enableKey = (id) => dispatch => {
    dispatch({type: 'ENABLE_KEY', payload: id});
    
};