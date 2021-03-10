import DeckBuilder from "./components/deckBuilder"
import DuelSim from "./components/duelSim"
import Deck from "./components/deck"
import Login from "./components/login"
import './App.css';
import store from "./Redux/store"
import {Provider} from "react-redux"
import {useSelectors, useActionCreators} from "use-redux"
import {usernameSelector, userSelector} from "./Redux/Selectors"
import {Switch, Route, BrowserRouter, Redirect, NavLink} from "react-router-dom"
import React, { useEffect } from "react";
import{clearUser, setCurrentUser} from "./Redux/Actions"
import axios from "axios"
function App() {
  const [clearUserFromState, setUserInState] = useActionCreators(clearUser, setCurrentUser)
  const [username, user] = useSelectors(usernameSelector, userSelector);
  
  useEffect(async () =>{
    try{
    const json = await axios.get("/users/authenticate")
    if(json.data.success){
      setUserInState(json.data.data.username)
    }
  }
  catch(err){}
  }, [])
  return (
    
    <Provider store = {store}>
      <BrowserRouter>
        <main>
          <div className = "siteTitle">Duel Links Deck Builder</div>
        <nav>
        <NavLink className = "link" activeClassName = "activeLink" to ="/login">Login</NavLink>
          <NavLink className = "link" activeClassName = "activeLink" to ="/deckBuilder">Deck Builder</NavLink>
          <NavLink className = "link" activeClassName = "activeLink" to ="/duelSim">Duel Simulator</NavLink>
          <NavLink className = "link" activeClassName = "activeLink" to ="/deck">Deck</NavLink>

        </nav>
          <Switch>
          <Route path = "/login" component = {Login}></Route>
          <Route path = "/deckBuilder" component = {DeckBuilder}></Route>
          <Route path = "/DuelSim" component = {DuelSim}></Route>
          <Route path = "/deck" component = {Deck}></Route>
          <Route path = "*">
            <Redirect to ="/deckBuilder"/>
          </Route>
          </Switch>
        </main>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
