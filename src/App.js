import React, { useState, useEffect } from "react";
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

  // Cargar el carrito desde localStorage cuando el componente se monte
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Store"
            component={() => <Store addToCart={addToCart} />}
          />
          <Route
            path="/shoppingcart"
            component={() => (
              <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            )}
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
