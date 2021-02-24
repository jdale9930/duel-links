import {React} from "react"
import "./cardDisplay.css"

const CardDisplay = (props) => {

    return(
        <img className = "card"src = {props.image_big} alt={`${props.name}`}></img>
    )
}

export default CardDisplay;