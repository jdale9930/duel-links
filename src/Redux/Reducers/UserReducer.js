import {SET_CURRENT_USER} from "../Actions"
import {SET_CURRENT_ID} from "../Actions"

const initialState = 
{
    name: "",
    id: 0,
};
export default function UserReducer(state = initialState, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return({...state, name: action.name})
        case SET_CURRENT_ID:
            return({...state, id: action.id})
        default:
            return state;
    }
}