
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
import {db,auth} from './firebase'
import Login from './Login';




function App() {

//login stte of the useruse
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
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


const signOut = () =>{
  auth.signOut().then(()=>{
    setUser(null)
  })
}





  return (
    <Router>

    {/* if ther is no user show us the login otherwise show use the other pages */}
      {
       
        !user ? (  
          <Login></Login>
        ):(
          <div className="App">
            <Header cartitems = {cartItems}  user = {user} signOut = {signOut}/>

          <Switch>
            <route path = "/cart">
              <Cart cartitems = {cartItems}/>
            </route>
            <Route path = "/">
              <Home/>
            </Route>
          </Switch>
          
        </div>
        )
      }
        
    </Router>

  );
}

export default App;
