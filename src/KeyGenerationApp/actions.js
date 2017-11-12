export const generateKey = (dispatch) => (e) => {
  e.preventDefault();
  const seller = e.target.querySelector('#seller');
  const pay_count = e.target.querySelector('#pay_count');
  const link = e.target.querySelector('#link');
  
  const fd = new FormData();
  fd.append('seller', seller.value);
  fd.append('pay_count', pay_count.value);
  fd.append('link', link.value);

  console.log(e.target, seller, pay_count, link, fd);

  fetch('http://i98888jy.bget.ru/activation/api/keys/add.php', {
    method: 'POST',
    body: fd
  }).then(response => response.json()).then(json => {
    console.log('ADD_KEY', json.response);
    dispatch({type: 'ADD_KEY', payload: json.response});
    pay_count.value = '';
    link.value = '';
  });
}

export const loadSellers = (dispatch) => () => {
  console.log('LOAD');
  fetch('http://i98888jy.bget.ru/activation/api/sellers/getAll.php')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({type: 'LOAD_SELLERS_LIST', payload: json.response});
    });
}