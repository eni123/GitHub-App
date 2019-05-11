import {SHOW_REP} from '../actions/types';

const initState={
    repos:[]

}
 function repoReducer(state=initState,action){

    switch(action.type){
        case SHOW_REP:
            return {
               ...state,
                repos: action.repos
            }
        default:
            return state
    }
}
export default repoReducer