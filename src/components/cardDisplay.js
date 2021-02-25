import {React} from "react"
import "./cardDisplay.css"
import InfoDisplay from "./infoDisplay"

const CardDisplay = (props) => {

    return(
        <div onClick ={(evt) => {
            <InfoDisplay image ={evt.src}>pls</InfoDisplay>}}>
        <img className = "card"src = {props.image_big} alt={`${props.name}`}
        onMouseOver ={(evt) => {
        <div><InfoDisplay image ={evt.src}></InfoDisplay></div>}}
        ></img>
        </div>
    )
}

export default CardDisplay;