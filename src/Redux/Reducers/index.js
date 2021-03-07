import {combineReducers} from "redux"
import DeckReducer from "./DeckReducer"
import SearchReducer from "./SearchReducer"
import UserReducer from "./UserReducer"

const rootReducer = combineReducers({
    deck: DeckReducer,
    search: SearchReducer,
    user: UserReducer,
})

export default rootReducer;