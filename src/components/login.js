import {React, useState} from "react"
import {connect} from "react-redux"
import {setCurrentUser, setCurrentId} from "../Redux/Actions";
//import axios from "axios"
const Login = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function signup(data){
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
                setCurrentUser(json.data.username)
                setCurrentId(json.data.id)
            }
        }
         catch(evt){
             setError("Something went wrong! Please try again later!")
             console.log(error)
         }
    }

    return(
        <div>
            <input type = "text" value = {username} placeholder = "Username"
            onChange = {(evt) =>{setUsername(evt.target.value)}}
            ></input>
             <input type = "text" value = {password} placeholder = "Password"
            onChange = {(evt) =>{setPassword(evt.target.value)}}
            ></input>
            <button
            onClick = {(evt) => signup({username, password})}
            >Login</button>
            <button>Sign up</button>
            <div>{error}</div>
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