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
    fd.append('price', e.target.querySelector('#price').value);
    fd.append('cnt', e.target.querySelector('#devices-num').value);
    fd.append('user_profile', e.target.querySelector('#link').value);
    fd.append('id', e.target.querySelector('#id').value);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://i98888jy.bget.ru/activation/api/editKey.php', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
            window.jQuery('#keysAppModal').modal('hide');
        }
    }
    xhr.send(fd);
};