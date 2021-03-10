import axios from "axios"

async function addToDeck(cardName, deckId){
    try{
        let response = await axios.post("/cards/add",
        {
            name: cardName,
            deck_id: deckId
        })
        .then((console.log(response)))
    }
    catch(err)
    {}
}

async function removeFromDeck(cardId){
    try{
        let response = await axios.delete(`/cards/remove/${cardId}`)
    }
    catch(err)
    {}
}

async function clearDeck(deckId){
    try{
        let response = await axios.post("/cards/clearDeck",
        {
            id: deckId
        })
        .then((console.log(response)))
    }
    catch(err)
    {}
}

async function getCardsInDeck(deckId){
    try{
        let response = await axios(`/cards/byDeckID/${deckId}`)
        return response
    }
    catch(err)
    {}
}

async function getUserDecks(userId){
    try{
        let response = await axios(`/decks/byUserID/${userId}`)
        return response
    }
    catch(err)
    {}
}

async function addDeck(deckName, userId){
    try{
        let response = await axios.post(`/decks/add`,
        {
            name: deckName,
            user_id: userId
        })
        return response
    }
    catch(err)
    {}
}

async function deleteDeck(deckId){
    try{
        let response = await axios.delete(`/decks/delete/${deckId}`)
        return response
    }
    catch(err)
    {}
}


module.exports = {addToDeck, removeFromDeck, getCardsInDeck, getUserDecks, }