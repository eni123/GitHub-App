import {SHOW_USER, LOG_OUT,} from '../actions/types';

const initState = {
    info: {},
    repos: [],
    events: [],
    orgs:[]
};

function userReducer(state = initState, action) {
    switch (action.type) {
        case SHOW_USER:
            return {
                ...state,
                info: action.user,
                events: action.events,
                repos: action.repos,
                orgs:action.orgs
            };
        case LOG_OUT:
            return {
                ...state,
                info: {},
                repos: [],
                events: [],
                orgs:[]
            };
        default:
            return state
    }
}

export default userReducer