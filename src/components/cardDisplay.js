import {React} from "react"
import "./cardDisplay.css"
//import InfoDisplay from "./infoDisplay"

const CardDisplay = (props) => {
    const info = {
        id: props.id, 
        name: props.name, 
        type: props.type, 
        effect: props.effect,
        atk: props.atk, 
        def: props.def,
        level: props.level,
        race: props.race,
        attribute: props.attribute,
        archetype: props.archetype,
        image_big: props.image_big,
        image_small: props.image_small,

    }
    return(
        <div>
        <img className = "card"src = {props.image_big} alt={`${props.name}`}
        onClick = {(evt) => {
        props.setCardInfo(info) 
        }}>
        </img>
        </div>
    )
}

export default CardDisplay;