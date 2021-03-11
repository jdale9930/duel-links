import {SET_CURRENT_DECK} from "../Actions"

//let counter = 0;
const initialState = ""
export default function DeckReducer(state = initialState, action){
    switch(action.type){
        // case ADD_TO_DECK:
        //     counter = 0;
        //     state.extraDeck.map((v)=> {
        //         v.id === action.card.id && (counter = counter +1)
        //         //console.log(action.card.id)
        //         return counter
        //     })
        //     state.mainDeck.map((v)=> {
        //         v.id === action.card.id && (counter = counter +1)
        //         //console.log(state.mainDeck)
        //         return counter
        //     })
        //     if(
        //         action.card.type === "Fusion Monster" ||
        //         action.card.type === "Synchro Monster" ||
        //         action.card.type === "Synchro Tuner Monster" ||
        //         action.card.type === "Synchro Monster" ||
        //         action.card.type === "XYZ Monster"
        //     )
        //     {
        //         if(state.extraDeck.length < 7)
        //         {
        //             if(counter < 3)
        //             {
        //                 console.log(state.extraDeck)
        //             return({...state, extraDeck: [...state.extraDeck, action.card]})
        //             }
        //             else return state
        //         }
        //         else return state
        //     }
        //     else
        //     {
        //         if(state.mainDeck.length < 30)
        //         {
        //             if(counter < 3)
        //             {
        //                 return({...state, mainDeck: [...state.mainDeck, action.card]})
        //             }
        //         else return state
        //         }
        //         else return state
        //     }
        //     //return([...state, action.card])
        // case REMOVE_FROM_DECK:
        //     if(
        //         action.card.type === "Fusion Monster" ||
        //         action.card.type === "Synchro Monster" ||
        //         action.card.type === "Synchro Tuner Monster" ||
        //         action.card.type === "Synchro Monster" ||
        //         action.card.type === "XYZ Monster"
        //     )
        //     {
        //         let newExtraDeck = [...state.extraDeck]
        //         let idxE = newExtraDeck.findIndex((v)=> v.id === action.card.id)
        //         newExtraDeck.splice(idxE, 1)

        //         return ({...state, extraDeck:[...newExtraDeck]})
        //     }
        //     else
        //     {
        //     let newMainDeck = [...state.mainDeck]
        //     let idxM = newMainDeck.findIndex((v)=> v.id === action.card.id)
        //     newMainDeck.splice(idxM, 1)
        //     console.log(newMainDeck)
        //     return ({...state, mainDeck: [...newMainDeck]})
        //     }
            case SET_CURRENT_DECK:
                return (action.deck)
        default:
            return state;
    }

}