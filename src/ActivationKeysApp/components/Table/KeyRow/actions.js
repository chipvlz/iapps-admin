export const disableKey = (dispatch, id) => () => {
  fetch(`http://i98888jy.bget.ru/activation/api/keys/disable.php?id=${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({type: 'DISABLE_KEY', payload: id});
    });
};


export const enableKey = (dispatch, id) => () => {
  fetch(`http://i98888jy.bget.ru/activation/api/keys/enable.php?id=${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({type: 'ENABLE_KEY', payload: id});
    });
};


export const deleteKey = (dispatch, id) => () => {
  fetch(`http://i98888jy.bget.ru/activation/api/keys/delete.php?id=${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({type: 'DELETE_KEY', payload: id});
    });
};