import {SHOW_USER} from './types';

export function showUser(username) {
    return function (dispatch) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                return dispatch(
                    {
                        type: SHOW_USER,
                        payload: data
                    }
                )
            })
    }
}