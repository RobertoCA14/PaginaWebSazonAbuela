// App.js
import React, { useState } from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Home from "./components/Home";
import Header from "./components/Header";

import Store from "./components/Store";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Store"
            component={() => <Store addToCart={addToCart} />}
          />

          <Route
            path="/shoppingcart"
            component={() => <ShoppingCart cart={cart} />}
          />
          <Route
            path="/footer"
            component={() => <ShoppingCart cart={cart} />}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
