import {TOGGLE_LOADING} from "./types";

export function toggleLoading(status) {
    return function (dispatch) {
        console.log(dispatch)
        console.log(status)
        dispatch({
            type: TOGGLE_LOADING,
            status
        })
    }
}