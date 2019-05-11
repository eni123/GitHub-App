import {SHOW_REP} from './types';

export function showRep(username){
    return function(dispatch){
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response=>response.json())
            .then(data=>dispatch(
                {
                    type: SHOW_REP,
                    repos: data
                }
            ) )

    }
}