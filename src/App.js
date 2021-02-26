import DeckBuilder from "./components/deckBuilder"
import DuelSim from "./components/duelSim"
import Deck from "./components/deck"
import './App.css';
import store from "./Redux/store"
import {Provider} from "react-redux"
import {Switch, Route, BrowserRouter, Redirect, NavLink} from "react-router-dom"
function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <main>
        <nav>
          <NavLink to ="/deckBuilder">Deck Builder</NavLink>
          <NavLink to ="/duelSim">Duel Simulator</NavLink>
          <NavLink to ="/deck">Deck</NavLink>

        </nav>
          <Switch>
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
