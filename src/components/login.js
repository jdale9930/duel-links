import {React, useState} from "react"
import {connect} from "react-redux"
import {setCurrentUser, setCurrentId} from "../Redux/Actions";
//import axios from "axios"
const Login = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function signup(data){
        
        try{
            fetch(`/users/signup`, {
                method: `POST`,
                //mode: "no-cors",
                headers: {
                    "Content-Type":"application/json"},
                body: JSON.stringify({
                    username: "username",
                    password: "password"
                })
            })
            .then((res) => console.log(res))
        }
         catch(evt){
             setError("Something went wrong!")
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
            onClick = {(evt) => signup()}
            >Login</button>
            <button>Sign up</button>
            
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