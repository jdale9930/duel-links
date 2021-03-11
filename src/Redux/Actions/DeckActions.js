export const ADD_TO_DECK = "Add to deck"
export const REMOVE_FROM_DECK = "Remove from deck"
export const SET_CURRENT_DECK = "Set current deck"

export function addToDeck(card){
    return{type: ADD_TO_DECK, card: card}
}

export function removeFromDeck(card){
    return{type: REMOVE_FROM_DECK, card: card}
}

export function setCurrentDeck(deck){
    return{type: SET_CURRENT_DECK, deck: deck}
}