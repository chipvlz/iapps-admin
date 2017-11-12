export const loadKeysList = (dispatch) => function(offset = 0) {
    let dispatchType = 'LOAD_ALL_KEYS_LIST'
    dispatch({type: 'SET_LOADING'})
    let url = 'http://i98888jy.bget.ru/activation/api/getKeys.php';
    console.log(offset);
    if (offset > -1) {
        url += '?offset=' + offset;
        dispatchType = 'LOAD_KEYS_LIST';
    }
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);

            dispatch({type: dispatchType, payload: json.response});
            dispatch({type: 'UNSET_LOADING'});
        })
        .catch(error => {
            console.error(error);
        });
}


export const updateKey = (e) => dispatch => {
    const fd = new FormData();
    
    let price = e.target.querySelector('#price').value
    let devices = e.target.querySelector('#devices-num').value
    let link = e.target.querySelector('#link').value
    let id = e.target.querySelector('#id').value

    fd.append('price', price);
    fd.append('cnt', devices);
    fd.append('user_profile', link);
    fd.append('id', id);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://i98888jy.bget.ru/activation/api/editKey.php', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
            dispatch({type: 'UPDATE_KEY', payload: {
                price: price,
                id: id,
                user_profile: link,
                cnt: devices,
            }});
            window.jQuery('#keysAppModal').modal('hide');
        }
    }
    xhr.send(fd);
};