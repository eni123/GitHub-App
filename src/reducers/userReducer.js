import {SHOW_USER} from '../actions/types';
import {LOG_OUT} from '../actions/types';
const initState={
    user:{}
}
function userReducer(state=initState,action){
    switch(action.type){
        case SHOW_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOG_OUT:
            return{
                ...state,
                user: {}
            }
        default:
            return state
    }
}
export default userReducer