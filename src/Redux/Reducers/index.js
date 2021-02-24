import {combineReducers} from "redux"
import DeckReducer from "./DeckReducer"
import SearchReducer from "./SearchReducer"

const rootReducer = combineReducers({
    deck: DeckReducer,
    search: SearchReducer,
})

export default rootReducer;