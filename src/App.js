
import './App.css';
import Cart from './Cart';
import Header from './Header'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>

          <Switch>
            <route path = "/cart">
              <Cart/>
            </route>
            <Route path = "/">
              <Home/>
            </Route>
          </Switch>
          
        </div>
    </Router>

  );
}

export default App;
