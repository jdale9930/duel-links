import {SET_SEARCH} from "../Actions"

const initialState = "";
export default function setSearch(state = initialState, action){
    switch(action.type){
        case SET_SEARCH:
            return(action.search)
        default:
            return state;
    }

}