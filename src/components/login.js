import {React, useState} from "react"
import {connect} from "react-redux"
import {setCurrentUser, setCurrentId} from "../Redux/Actions";
import {useHistory} from "react-router-dom"
import "./login.css"
//import axios from "axios"
const Login = (props) =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()

    async function signup(data){
        setError("")
        try{
            const response = await fetch(`/users/signup`, {
                method: `POST`,
                headers: {
                    "Content-Type":"application/json"},
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                })
            })
            const json = await response.json();
            if(json.error){
                setError(json.error)
            }
            else{
                props.setCurrentUser(json.data.username)
                props.setCurrentId(json.data.id)
                history.push("/deckBuilder")
            }
        }
         catch(err){
             console.log("Line 31")
             setError("Something went wrong! Please try again later!")
             console.log(error)
         }
    }

    async function login(data){
        setError("")
        try{
            const response = await fetch(`/users/login`, {
                method: `POST`,
                headers: {
                    "Content-Type":"application/json"},
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                })
            })
            const json = await response.json();
            if(json.data.error){
                console.log("line 50")
                setError(json.data.error)
            }
            else{
                console.log(json)
                console.log(json.data.username)
                props.setCurrentUser(json.data.username)
                console.log(props.username)
                props.setCurrentId(json.data.id)
                history.push("/deckBuilder")
            }
        }
         catch(err){
             console.log("Line 58")
             //setError("Something went wrong! Please try again later!")
             console.log(error)
         }
    }

    return(
        <div className = "loginContainer">
            <p style={{textAlign: "center"}} >Login or signup to be able to make your own Yu-Gi-Oh Duel Links decks!</p>
            <input className = "inputLogin" type = "text" value = {username} placeholder = "Username"
            onChange = {(evt) =>{setUsername(evt.target.value)}}
            ></input>
             <input className = "inputLogin" type = "text" value = {password} placeholder = "Password"
            onChange = {(evt) =>{setPassword(evt.target.value)}}
            ></input>
            <button
            onClick = {(evt) => signup({username, password})}
            >Signup</button>
            <button
            onClick = {(evt) => login({username, password})}
            >Login</button>
            <div style={{textAlign: "center", marginTop: "10px"}}>{error}</div>
            
            {/* <h1>Hello, {props.username}</h1> */}
        </div>
    )
}
function mapStateToProps(state){
    return{
        username: state.user.name,
        userId: state.user.id
    }
}

const mapDispatchToProps = {
    setCurrentUser,
    setCurrentId
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);