import React from "react"
import "./infoDisplay.css"

const InfoDisplay = (props) =>
{
    console.log("pls")
    return(
        <div className = "infoContainer">
            pls
            <img alt = "ahhh" src = {props.image}></img>
        </div>
    )
}

export default InfoDisplay