export const loadKeysList = (dispatch) => function(offset = 0, count = 10) {
    let dispatchType = 'LOAD_ALL_KEYS_LIST'
    dispatch({type: 'SET_LOADING'})
    let url = `http://i98888jy.bget.ru/activation/api/keys/get.php`;
    if (offset > -1) {
        url = `http://i98888jy.bget.ru/activation/api/keys/get.php?count=${count}&offset=${offset}`;
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


export const updateKey = (dispatch) => (e) => {
    e.preventDefault();

    const fd = new FormData();    

    // let seller = e.target.querySelector('#seller').value
    let devices = e.target.querySelector('#devices-num').value
    let link = e.target.querySelector('#link').value
    let id = e.target.querySelector('#id').value

    // fd.append('seller', seller);
    fd.append('cnt', devices);
    fd.append('user_profile', link);
    fd.append('id', id);

    console.log(fd.get('cnt'));

    fetch('http://i98888jy.bget.ru/activation/api/keys/edit.php', {
        method: 'POST',
        body: fd
    }).then(response => response.json()).then(json => {
        if (json.response) {
            dispatch({type: 'UPDATE_KEY', payload: {
                id: id,
                user_profile: link,
                cnt: devices,
            }});
            window.jQuery('#keysAppModal').modal('hide');
        }
    });
};