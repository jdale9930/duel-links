import React from "react"
import "./infoDisplay.css"

const InfoDisplay = (props) =>
{
    console.log("pls")
    return(
        <div className = "infoContainer">
            <img className = "infoImage" alt = "ahhh" src = {props.info.image_big}></img>
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

export default InfoDisplay