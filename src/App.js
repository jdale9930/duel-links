import DeckBuilder from "./components/deckBuilder"
import DuelSim from "./components/duelSim"
import Deck from "./components/deck"
import Login from "./components/login"
import './App.css';
import store from "./Redux/store"
import {Provider} from "react-redux"
import {Switch, Route, BrowserRouter, Redirect, NavLink} from "react-router-dom"
import { useEffect } from "react";
import axios from "axios"
function App() {
  const [logout, login] = useActionCreators(clearUser, setUser)

  useEffect(async () =>{
    try{
    const json = await axios.get("/users/authenticate")
    if(json.data.success){
      login(json.data.data.username)
    }
  }
  catch(err){}
  })
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
