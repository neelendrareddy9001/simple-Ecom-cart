import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./components/Header";
import { Router } from "@reach/router";

//Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [theme] = useThemeHook();
  return (
    <div className="App">
      <main
        className={theme ? "bg-black" : "bg-light-2"}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <Header />
        <Router>
          <Home path="/" />
          <Cart path="/cart" />
          <ProductDetails path="product-details/:productId" />
          <SignIn path="sign-in" />
          <Register path="/register" />
        </Router>
      </main>
    </div>
  );
}

export default App;
