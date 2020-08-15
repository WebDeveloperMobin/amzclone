import React, { useEffect } from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Header from './header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";


function App(){
  
    const [{user}, dispatch]=useStateValue();

    // useEffect <<<<<<<<< Powerful

    useEffect(()=>{
      const unSubscribe=auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
        }else{
          dispatch({
            type:"SET_USER",
            user:null
          })
        }
      })
      return()=>{
        unSubscribe();
      }

    },[]);

    console.log("User is>>>>>>",user);

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Checkout">
          <Checkout/>
           </Route>

           <Route path="/login">
          <Login/>
           </Route>


           <Route path="/" exact strict>
             <Header />
          <Home/>
           </Route>
    </Switch>
       </div>
    </Router>
  );
}


export default App;
