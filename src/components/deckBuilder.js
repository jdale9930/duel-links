import {React, useState} from "react";
import {connect} from "react-redux";
import {addToDeck, removeFromDeck, setSearch} from "../Redux/Actions";

const DeckBuilder = (props) => {

    const [cardSearch, setCardSearch] = useState([])
    return(
        <div>
            <input type = "text"
            onChange = {(evt) => {setCardSearch([evt.target.value])}}>
            </input>
            <button onClick = {(evt) => {props.setSearch(cardSearch)}}
            
            >Search</button>
            <div>{props.search}</div>

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