import {React} from "react"
import "./infoDisplay.css"
import {connect} from "react-redux";
import {addToDeck, removeFromDeck, setSearch, clearSearch} from "../Redux/Actions";

const InfoDisplay = (props) =>
{
    return(
        <div className = "infoContainer">
            {props.info.image_big.length > 0 ?
            <>
           
            <button onClick = {() => {props.addToDeck(props.info)}}>
            Add To Deck</button>
            <button onClick = {() => {props.removeFromDeck(props.info)}}>
            Remove From Deck</button>
            <img className = "infoImage" alt = {props.info.name} src = {props.info.image_big}></img>
            </>
            :
            <>
            <button disabled>Add to Deck</button>
            <button disabled>Remover From Deck</button>
            <img className = "infoImage" alt = ""></img>
            </>
            }
            <div className = "cardTitle">{props.info.name}</div>
            {props.info.type !== "Spell Card" &&
            props.info.type !== "Trap Card" ?
            <>
            <div className="infoText">
                <div className = "textRow">Level: {props.info.level}</div>
                <div className = "textRow">{props.info.type}</div>
            </div>
            <div className ="infoText">
                <div className = "textRow">Type: {props.info.race}</div>
                <div className = "textRow">Attribute: {props.info.attribute}</div>
            </div>
            <div className ="infoText">
                <div className = "textRow">ATK: {props.info.atk}</div>
                <div className = "textRow">DEF: {props.info.def}</div>
            </div>
            </>
            :
            <div className = "infoText">
                <div className = "textRow">{props.info.type}</div>
                <div className = "textRow">Type: {props.info.race}</div>

            </div>
            }
            <div className = "effectText">{props.info.effect}</div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        deck: state.deck,
        card: state.deck.card,
        cardId: state.deck.id,
        search: state.search,
        mainDeck: state.deck.mainDeck,
        extraDeck: state.deck.extraDeck
    }
}

const mapDispatchToProps ={
    addToDeck,
    removeFromDeck,
    setSearch,
    clearSearch,
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoDisplay);