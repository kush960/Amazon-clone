import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

//test key
const promise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY);

function App() {
  const [{ user }, dispatch] = useStateValue();

  //UseEffect <<<<<<<<<<<<<<POWERFUL
  //Piece of code which runs based on given codition (it is listener)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        })

      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    });

    return () => {
      //Any cleanup operration go in here..
      unsubscribe();
    };


  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/prime">
            <Header />
            <h1>prime page</h1>
          </Route> */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
