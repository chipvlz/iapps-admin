export const loadKeysList = (page) => dispatch => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://i98888jy.bget.ru/activation/api/getKeys.php');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
            dispatch({type: 'LOAD_KEYS_LIST', payload: json.response})
        }
    }
    xhr.send();
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