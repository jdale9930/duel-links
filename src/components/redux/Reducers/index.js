import {combineReducers} from "redux"
import DeckReducer from "./DeckReducer"

const rootReducer = combineReducers({
    deck: DeckReducer,
})

export default rootReducer;