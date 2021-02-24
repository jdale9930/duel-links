import {React} from "react";
import {connect} from "react-redux";
import {addToDeck, removeFromDeck} from "../Redux/Actions";

const DeckBuilder = () => {

    
    return(
        <div>
            <h1>Pls</h1>

        </div>
    )
}

function mapStateToProps(state){
    return{
        deck: state.deck,
        card: state.deck.card,
        cardId: state.deck.id,
    }
}

const mapDispatchToProps ={
    addToDeck,
    removeFromDeck,
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);