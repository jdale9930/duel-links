import {React, useState} from "react";
import {connect} from "react-redux";
import {addToDeck, removeFromDeck, setSearch, clearSearch} from "../Redux/Actions";
import CardDisplay from "./cardDisplay"
import "./deckBuilder.css"
import InfoDisplay from "./infoDisplay"

const DeckBuilder = (props) => {

    const [cardSearch, setCardSearch] = useState([])
    const [error, setError] = useState("");
    const [attribute, setAttribute] = useState("")
    const [level, setLevel] = useState("")
    const [race, setRace] = useState("")
    const [type, setType] = useState("")
    const [mst, setMst] = useState("")
    const [cardInfo, setCardInfo] = useState({
        id: "", 
        name: "", 
        type: "", 
        effect: "",
        atk: "", 
        def: "",
        level: "",
        race: "",
        attribute: "",
        archetype: "",
        image_big: "",
        image_small: "",
    })

    async function getCards(search, attribute, level, race, type,)
    {
        let searchURL = ""
        let attributeURL = ""
        let levelURL = ""
        let raceURL = ""
        let typeURL = ""

        // console.log(mst)
        // console.log(type)
        search !== "" && (searchURL = `&fname=${search}`)
        attribute !== "" && (attributeURL = `&attribute=${attribute}`)
        level !== "" && (levelURL = `&level=${level}`)
        race !== "" && (raceURL = `&race=${race}`)
        type !== "" && (typeURL = `&type=${type}`)
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel%20links${searchURL}${attributeURL}${levelURL}${raceURL}${typeURL}`
        //console.log(url)
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
            //console.log(searchResults)
            setCardSearch(searchResults)
        }
         catch(evt){
             setError("Something went wrong!")
         }
    }


    return(
        <div>
            <div className = "deckBuilderTop">
            <div className = "searchBox">
            <div className = "columnBox">
            <input placeholder = "Card Name..."type = "text" value = {props.search}
            onChange = {(evt) => {props.setSearch(evt.target.value)}}>
            </input>
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
                        <option value = "">Card Type</option>
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
                        <option value = "">Card Type</option>
                        <option value = "Normal">Normal</option>
                        <option value = "Continuous">Continuous</option>
                        <option value = "Counter">Counter</option>
                    </select>
                }

                {mst === "Normal Monster,Effect Monster" && 
                    <select value = {type} onChange = {(evt) => {setType(evt.target.value)}}>
                        <option value = "">Card Type</option>
                        <option value = "Normal Monster">Normal</option>
                        <option value = "Effect Monster">Effect</option>
                        <option value = "Flip Effect Monster">Flip</option>
                        <option value = "Tuner Monster,Normal Tuner Monster">Tuner</option>
                        <option value = "Union Effect Monster">Union</option>
                        <option value = "Spirit Monster">Spirit</option>
                        <option value = "Toon Monster">Toon</option>
                        <option value = "Ritual Monster,Ritual Effect Monster">Ritual</option>
                        <option value = "Fusion Monster">Fusion</option>
                        <option value = "Synchro Monster,Synchro Tuner Monster">Synchro</option>
                        <option value = "XYZ Monster">XYZ</option>
                    </select>
                }
                {mst === "" &&
                    <select disabled>
                        <option>Card Type</option>
                    </select>
                }
            </div>

            <div className = "columnBox">
            {mst !== "Spell Card" &&
            mst !== "Trap Card" ?
            <>
            <div>
            <select className = "input" value = {attribute} onChange = {(evt) => {setAttribute(evt.target.value)}}>
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
            <select className = "input" value = {level} onChange = {(evt) => {setLevel(evt.target.value)}}>
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
            <select className = "input" value = {race} onChange = {(evt) => {setRace(evt.target.value)}}>
                <option value = "">Monster Type</option>
                <option value = "Aqua">Aqua</option>
                <option value = "Beast">Beast</option>
                <option value = "Beast-Warrior">Beast-Warrior</option>
                <option value = "Cyberse">Cyberse</option>
                <option value = "Dinosaur">Dinosaur</option>
                <option value = "Divine-Beast">Divine-Beast</option>
                <option value = "Dragon">Dragon</option>
                <option value = "Fairy">Fairy</option>
                <option value = "Fiend">Fiend</option>
                <option value = "Fish">Fish</option>
                <option value = "Insect">Insect</option>
                <option value = "Machine">Machine</option>
                <option value = "Plant">Plant</option>
                <option value = "Psychic">Psychic</option>
                <option value = "Pyro">Pyro</option>
                <option value = "Reptile">Reptile</option>
                <option value = "Rock">Rock</option>
                <option value = "Sea Serpent">Sea Serpent</option>
                <option value = "Spellcaster">Spellcaster</option>
                <option value = "Thunder">Thunder</option>
                <option value = "Warrior">Warrior</option>
                <option value = "Winged-Beast">Winged-Beast</option>
                <option value = "Zombie">Zombie</option>
            </select>
            </div>
            </>
             : 
            <>
            {attribute !== "" && setAttribute("")}
            {level !== "" && setLevel("")}
                <div>
                    <select className = "input" disabled>
                        <option>Attribute</option>
                    </select>
                </div>
                <div>
                    <select className = "input" disabled>
                        <option>Level/Rank</option>
                    </select>
                </div>
                <div>
                    <select className = "input" disabled>
                        <option>Type</option>
                    </select>
                </div>
            </>
            
            }
            </div>
            <div className = "columnBox">
            <button className = "searchButton" onClick = {() => {
                    getCards(props.search, attribute, level, race, type)
                }}
            >Search</button>
            <button className = "searchButton" onClick = {() => {
                props.clearSearch()
                setAttribute("")
                setLevel("")
                setRace("")
                setType("")
                setMst("")
                }
            }
            >Clear Search</button>
            </div>
            </div>
                <div className = "deckBox">
                    <div className = "usernameDisplay">{props.username}</div>
                    <div className = "deckBoxRow">
                        <select style = {{width: "150px"}}></select>
                        <div style = {{margin: "auto"}}>Current Deck</div>
                    </div>
                    <div className = "deckBoxRow">
                        <input type = "text"></input>
                        <button className = "newDeckButton">Create New Deck</button>
                        <div>{error}</div>
                    </div>
                </div>
            </div>

            <div className = "searchContainer">
            {error.length > 0 && <h1>{error}</h1>}
            {error.length === 0 && 
            cardSearch.map((v) => 
            <CardDisplay 
            key = {v.id} 
            id = {v.id} 
            name = {v.name}
            type = {v.type}
            effect = {v.effect}
            atk = {v.atk} 
            def = {v.def}
            level = {v.level}
            race = {v.race}
            attribute = {v.attribute}
            archetype = {v.archetype}
            image_big = {v.image_big}
            image_small = {v.image_small}
            cardInfo = {cardInfo}
            setCardInfo = {setCardInfo}
            />)}
            </div>
            <div>
                <InfoDisplay loc = "deckBuilder"info = {cardInfo} cardInfo = {cardInfo} setCardInfo = {setCardInfo}></InfoDisplay>
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
        username: state.user.name,
        userId: state.user.id
    }
}

const mapDispatchToProps ={
    addToDeck,
    removeFromDeck,
    setSearch,
    clearSearch,
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);