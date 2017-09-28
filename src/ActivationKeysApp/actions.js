export const loadKeysList = (page) => dispatch => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://asdasd/activation/api/getKeys.php');
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
    // var formData = new FormData(e.target);
    // console.log(formData);
    // xhr.open('POST', 'http://asdasd/activation/api/editKey.php', true);
    // fetch("http://asdasd/activation/api/editKey.php", {
    //     headers: {
    //         'Content-Type': 'application/json; charset=utf-8'
    //     },
    //     credentials: 'include',
    //     method: "POST",
    //     body: JSON.stringify({a: 10})
    // })
    // .then(function(res){ console.log(res) })
    // .catch(function(res){ console.log(res) })
};