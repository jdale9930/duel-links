export const ADD_TO_DECK = "Add to deck"
export const REMOVE_FROM_DECK = "Remove from deck"

export function addToDeck(card){
    return{type: ADD_TO_DECK, card: card}
}

export function removeFromDeck(card){
    return{type: REMOVE_FROM_DECK, card: card}
}