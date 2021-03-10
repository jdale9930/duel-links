import {SET_CURRENT_NAME} from "../Actions"
import {SET_CURRENT_ID} from "../Actions"
import {CLEAR_USER} from "../Actions"

const initialState = 
{
    name: "",
    id: 0,
};
export default function UserReducer(state = initialState, action){
    switch(action.type){
        case SET_CURRENT_NAME:
            return({...state, name: action.name})
        case SET_CURRENT_ID:
            return({...state, id: action.id})
        case CLEAR_USER:
            return({...state, name: "", id: 0})
        default:
            return state;
    }
}