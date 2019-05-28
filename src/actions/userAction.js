import {SHOW_USER} from './types';

export function showUser(username) {

    return function (dispatch) {
        try {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(async (data) => {
                    const res = await Promise.all([
                        fetch(`https://api.github.com/users/${username}/received_events`),
                        fetch(`https://api.github.com/users/${username}/repos`),
                        fetch(`https://api.github.com/users/${username}/orgs`)
                    ]);
                    const responseJson = await Promise.all([
                        res[0].json(),
                        res[1].json(),
                        res[2].json()
                    ]);

                    return dispatch(
                        {
                            type: SHOW_USER,
                            user: data,
                            events: responseJson[0],
                            repos: responseJson[1],
                            orgs:responseJson[2]
                        }
                    )
                    // fetch(`https://api.github.com/users/${username}/received_events`)
                    //                 .then(responseEvents=> responseEvents.json())
                    //                 .then(events => {
                    //                     console.log(events)
                    //                     return dispatch(
                    //                         {
                    //                             type: SHOW_USER,
                    //                             user: data,
                    //                             events
                    //                         }
                    //             )})


                    })
        } catch (error) {

        }

     }
 }
