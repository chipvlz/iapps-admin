export const loadKeysList = (page) => dispatch => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://URL/api/getKeys.php');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
            dispatch({type: 'LOAD_KEYS_LIST', payload: json.response})
        }
    }
    xhr.send();
}