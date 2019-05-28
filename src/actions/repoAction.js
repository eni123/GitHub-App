import {SHOW_REP} from './types';



export function showRep(username) {

    return function (dispatch) {
        try {
            fetch(`https://api.github.com/users/${username}/repos`)
                        .then(responseRepos => responseRepos.json())
                        .then(repo => {
                            console.log(repo);
                            return dispatch(
                                {
                                    type: SHOW_REP,
                                    repos:repo
                                }
                            )})
        } catch (error) {

        }
    }
}