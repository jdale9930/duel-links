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
    const [mst, setMst] = useState("")

    async function getCards(search, attribute, level, race, type,)
    {
        let searchURL = ""
        let attributeURL = ""
        let levelURL = ""
        let raceURL = ""
        let typeURL = ""

        console.log(mst)
        console.log(type)
        search !== "" && (searchURL = `&fname=${search}`)
        attribute !== "" && (attributeURL = `&attribute=${attribute}`)
        level !== "" && (levelURL = `&level=${level}`)
        race !== "" && (raceURL = `&race=${race}`)
        type !== "" && (searchURL = `&type=${type}`)
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel%20links${searchURL}${attributeURL}${levelURL}${raceURL}${typeURL}`
        console.log(url)
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
            <div>
            <input type = "text"
            onChange = {(evt) => {props.setSearch(evt.target.value)}}>
            </input>
            </div>
            <select></select>
            <div>
            <select value = {mst} onChange = {(evt)=> {
                setType(evt.target.value)
                setMst(evt.target.value)
                setRace("")}}>
                <option value = "">Card</option>
                <option value = "Spell Card">Spell</option>
                <option value = "Trap Card">Trap</option>
                <option value = "Normal Monster,Effect Monster">Monster</option>

            </select>

            
                {mst === "Spell Card" && 
                    <select value = {race} onChange = {(evt) => {setRace(evt.target.value)}}>
                        <option value = "">Spell Type</option>
                        <option value = "Normal">Normal</option>
                        <option value = "Field">Field</option>
                        <option value = "Equip">Equip</option>
                        <option value = "Continuous">Continuous</option>
                        <option value = "Quick-Play">Quick-Play</option>
                        <option value = "Ritual">Ritual</option>


                    </select>
                }
                {mst === "Trap Card" && 
                    <select value = {race} onChange = {(evt) => {setRace(evt.target.value)}}>
                        <option value = "">Trap Type</option>
                        <option value = "Normal">Normal</option>
                        <option value = "Continuous">Continuous</option>
                        <option value = "Counter">Counter</option>
                    </select>
                }
                {mst === "Normal Monster,Effect Monster" && 
                    <select value = {type} onChange = {(evt) => {setType(evt.target.value)}}>
                        <option value = ""></option>
                        <option value = "Normal Monster">Normal</option>
                        <option value = "Effect Monster">Effect</option>
                        <option value = "Flip Effect Monster">Flip</option>
                        <option value = "Tuner Monster,Normal Tuner Monster">Tuner</option>
                        <option value = "Union Effect Monster">Union</option>
                        <option value = "Spirit Monster">Spirit</option>
                        <option value = "Toon Monster">Toon</option>
                        <option value = "Ritual Monster,Ritual Effect Monster">Ritual</option>
                        <option value = "Fusion Monster">Fusion</option>
                        <option value = "Synchro Monster">Synchro</option>
                        <option value = "XYZ Monster">XYZ</option>
                    </select>
                }
            </div>

            
            {mst !== "Spell Card" &&
            mst !== "Trap Card" ?
            <>
            <div>
            <select value = {attribute} onChange = {(evt) => {setAttribute(evt.target.value)}}>
                <option value = "">Attribute</option>
                <option value ="EARTH">Earth</option>
                <option value ="FIRE">Fire</option>
                <option value ="WATER">Water</option>
                <option value ="WIND">Wind</option>
                <option value ="LIGHT">Light</option>
                <option value ="DARK">Dark</option>
                <option value ="DIVINE">Divine</option>
            </select>
            </div>

            <div>
            <select value = {level} onChange = {(evt) => {setLevel(evt.target.value)}}>
                <option value = "">Level/Rank</option>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
                <option value = "6">6</option>
                <option value = "7">7</option>
                <option value = "8">8</option>
                <option value = "9">9</option>
                <option value = "10">10</option>
                <option value = "11">11</option>
                <option value = "12">12</option>
            </select>
            </div>
            <div>
            <select value = {race} onChange = {(evt) => {setRace(evt.target.value)}}>
                <option value = "">Type</option>
            </select>
            </div>
            </>
             : 
            <>
            {attribute !== "" && setAttribute("")}
            {level !== "" && setLevel("")}
                <div>
                    <select disabled>
                        <option>Attribute</option>
                    </select>
                </div>
                <div>
                    <select disabled>
                        <option>Level/Rank</option>
                    </select>
                </div>
                <div>
                    <select disabled>
                        <option>Type</option>
                    </select>
                </div>
            </>
            
            }
            <button onClick = {() => {
                console.log(mst)
                console.log(type)
                    getCards(props.search, attribute, level, race, type)
                }}
            
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