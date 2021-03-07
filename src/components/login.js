import {React, useState} from "react"
import {connect} from "react-redux"
import {setCurrentUser, setCurrentId} from "../Redux/Actions";
const Login = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div>
            <input type = "text" value = {username} placeholder = "Username"
            onChange = {(evt) =>{setUsername(evt.value)}}
            ></input>
             <input type = "text" value = {password} placeholder = "Password"
            onChange = {(evt) =>{setPassword(evt.value)}}
            ></input>
            <button>Login</button>
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