import {SET_SEARCH} from "../Actions"
import {CLEAR_SEARCH} from "../Actions"

const initialState = "";
export default function setSearch(state = initialState, action){
    switch(action.type){
        case SET_SEARCH:
            return(action.search)
        case CLEAR_SEARCH:
            return(initialState)
        default:
            return state;
    }

}