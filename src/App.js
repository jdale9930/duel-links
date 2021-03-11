import DeckBuilder from "./components/deckBuilder"
import DuelSim from "./components/duelSim"
import Deck from "./components/deck"
import Login from "./components/login"
import './App.css';
import store from "./Redux/store"
import {Provider} from "react-redux"
import {useSelectors, useActionCreators} from "use-redux"
import {usernameSelector, userSelector} from "./Redux/Selectors"
import {Switch, Route, BrowserRouter, Redirect, NavLink, useHistory} from "react-router-dom"
import React, { useEffect, useMemo, useState } from "react";
import{clearUser, setCurrentUser} from "./Redux/Actions"
import axios from "axios"
import ProtectedRoute from "./components/shared/ProtectedRoute"

function App() {
  const history = useHistory;
  const [clearUserFromState, setUserInState] = useActionCreators(clearUser, setCurrentUser)
  const [username, user] = useSelectors(usernameSelector, userSelector);

  
  const isAuth = useMemo(() => {
    return username.length > 0;
  }, [user])
  useEffect(async () =>{
    try{
    const json = await axios.get("/users/authenticate")
    if(json.data.success){
      setUserInState(json.data.data.username)
    }
  }
  catch(err){}
  }, [])
  async function logout(){
    try{
    const {data} = await axios("/users/logout")
    clearUserFromState();
    }
    catch(err)
    {
      console.log("Well that shouldn' have happened")
    }
  }
  return (
    
    <Provider store = {store}>
      <BrowserRouter>
        <main>
          <div className = "siteTitle">Duel Links Deck Builder</div>
        <nav>
          {username.length === 0 && 
          <NavLink className = "link" activeClassName = "activeLink" to ="/login">Login</NavLink> }
          {username.length > 0 &&
          <NavLink className = "link" activeClassName = "activeLink" to ="/deckBuilder">Deck Builder</NavLink>}
          {username.length > 0 &&
          <NavLink className = "link" activeClassName = "activeLink" to ="/duelSim">Duel Simulator</NavLink>}
          {username.length > 0 &&
          <NavLink className = "link" activeClassName = "activeLink" to ="/deck">Deck</NavLink>}
          {username.length > 0 &&
          <NavLink className = "logout" onClick = {() =>{logout()}} to ="/login">Logout</NavLink>}

        </nav>
          <Switch>
          <ProtectedRoute isAuth = {isAuth} authRequired = {false} path = "/login" component = {Login}></ProtectedRoute>
          <ProtectedRoute isAuth = {isAuth} authRequired = {true} path = "/deckBuilder" component = {DeckBuilder}></ProtectedRoute>
          <ProtectedRoute isAuth = {isAuth} authRequired = {true} path = "/DuelSim" component = {DuelSim}></ProtectedRoute>
          <ProtectedRoute isAuth = {isAuth} authReauired = {true} path = "/deck" component = {Deck}></ProtectedRoute>
          <Route path = "*">
            <Redirect to ="/login"/>
          </Route>
          </Switch>
        </main>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
