
import './App.css';
import Cart from './Cart';
import {useState,useEffect} from 'react'
import Header from './Header'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {db} from './firebase'




function App() {

const [cartItems, setCartItems] = useState([]);

const getCartItems =()=>{

  db.collection('cartItems').onSnapshot((snashot) =>{
    const tempitems  = snashot.docs.map((doc) =>({
      id:doc.id,
      product:doc.data()
    }))
    setCartItems(tempitems)
  })
}
useEffect(() => {
  getCartItems()
}, [])

  return (
    <Router>
        <div className="App">
          <Header/>

          <Switch>
            <route path = "/cart">
              <Cart cartitems = {cartItems}/>
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
