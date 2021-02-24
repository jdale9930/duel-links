import {React, useState} from "react";
import {connect} from "react-redux";
import {addToDeck, removeFromDeck, setSearch} from "../Redux/Actions";
import CardDisplay from "./cardDisplay"
import "./deckBuilder.css"

const DeckBuilder = (props) => {

    const [cardSearch, setCardSearch] = useState([])
    const [error, setError] = useState("");
    const [attribute, setAttribute] = useState("")
    const [level, setLevel] = useState("")
    const [race, setRace] = useState("")
    const [type, setType] = useState("")

    async function getCards(search, attribute, level, race, type,)
    {
        let searchURL = ""
        let attributeURL = ""
        let levelURL = ""
        let raceURL = ""
        let typeURL = ""

        search !== "" && (searchURL = `&fname=${search}`)
        attribute !== "" && (attributeURL = `&attribute=${attribute}`)
        level !== "" && (levelURL = `&level=${level}`)
        race !== "" && (raceURL = `&race=${race}`)
        type !== "" && (searchURL = `&type=${type}`)
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel%20links${searchURL}${attributeURL}${levelURL}${raceURL}${typeURL}`
        try{
            setError("")
            let response = await fetch(url);
            let json = await response.json();
            console.log(json)
            let searchResults = json.data.map((v) => {

                return {
                    id: v.id, 
                    name: v.name, 
                    type: v.type, 
                    effect: v.desc,
                    atk: v.atk, 
                    def: v.def,
                    level: v.level,
                    race: v.race,
                    attribute: v.attribute,
                    archetype: v.archetype,
                    image_big: v.card_images[0].image_url,
                    image_small: v.card_images[0].image_url_small,
                }
            })
            console.log(searchResults)
            setCardSearch(searchResults)
        }
         catch(evt){
             setError("Something went wrong!")
         }
    }


    return(
        <div>
            <input type = "text"
            onChange = {(evt) => {props.setSearch(evt.target.value)}}>
            </input>
            <select value = {type} onChange = {(evt) => {setType(evt.target.value)}}>
                
            </select>
            <select value = {attribute} onChange = {(evt) => {setAttribute(evt.target.value)}}>

            </select>
            <select value = {level} onChange = {(evt) => {setLevel(evt.target.value)}}>
                
            </select>
            <select value = {race} onChange = {(evt) => {setRace(evt.target.value)}}>
                
            </select>
            <button onClick = {() => {getCards(props.search, attribute, level, race, type)}}
            
            >Search</button>
            <div className = "searchContainer">
            {error.length > 0 && <h1>{error}</h1>}
            {error.length === 0 && 
            cardSearch.map((v) => 
            <CardDisplay key = {v.id} image_big = {v.image_big} image_small = {v.image_small}name = {v.name}/>)}
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        deck: state.deck,
        card: state.deck.card,
        cardId: state.deck.id,
        search: state.search,
    }
}

const mapDispatchToProps ={
    addToDeck,
    removeFromDeck,
    setSearch,
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);