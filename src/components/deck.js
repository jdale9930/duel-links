import {React, useState} from "react"
import CardDisplay from "./cardDisplay"
import InfoDisplay from "./infoDisplay"
import {connect} from "react-redux";
import {addToDeck, removeFromDeck, setSearch, clearSearch} from "../Redux/Actions";

const Deck = (props) => {
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
    return(
        <div>
            <button onClick = {()=> props.addToDeck(1)}>add to deck</button>
            <button onClick = {() => console.log(props.deck)}>log</button>
            {props.deck.map((v) =>
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
            ></CardDisplay>
            )}
            <InfoDisplay info = {cardInfo} cardInfo = {cardInfo} setCardInfo = {setCardInfo}></InfoDisplay>

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
    clearSearch,
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck);