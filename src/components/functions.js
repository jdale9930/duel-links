import axios from "axios"

export async function addToDeck(cardName, deckId){
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

export async function removeFromDeck(cardId){
    try{
        let response = await axios.delete(`/cards/remove/${cardId}`)
    }
    catch(err)
    {}
}

export async function clearDeck(deckId){
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

export async function getCardsInDeck(deckId){
    try{
        let response = await axios(`/cards/byDeckID/${deckId}`)
        return response
    }
    catch(err)
    {}
}

export async function getUserDecks(userId){
    try{
        let response = await axios(`/decks/byUserID/${userId}`)
        return response
    }
    catch(err)
    {}
}

export async function addDeck(name, user_id){
    console.log(name, user_id)
    try{
        await axios.post(`/decks/add`,
        {
            name: name,
            user_id: user_id
        })
        
    }
    catch(err)
    {}
}

export async function deleteDeck(deckId){
    try{
        let response = await axios.delete(`/decks/delete/${deckId}`)
        return response
    }
    catch(err)
    {}
}

export async function userLogout(){
    
}

export default "*"