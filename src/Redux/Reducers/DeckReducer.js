import {ADD_TO_DECK, REMOVE_FROM_DECK} from "../Actions"

const initialState = [];
export default function DeckReducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_DECK:
            return([...state, action.card])
        case REMOVE_FROM_DECK:
            return state.filter((v) => v !== action.id)
        default:
            return state;
    }

}