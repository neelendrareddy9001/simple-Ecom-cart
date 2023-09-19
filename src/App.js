import React from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./components/Header";

import { Router } from "@reach/router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProductDetails from "./components/ProductDetails";
import MyAccount from "./pages/MyAccount";

function App() {
  const [theme] = useThemeHook();
  return (
    <div className="App">
      <main
        className={theme ? "bg-black" : "bg-light-2"}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-in" exact element={<SignIn />} />
            <Route path="/my-accout" exact element={<MyAccount />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="product-details/:productId" exact element={<Home />} />
            <Route path="/cart" exact element={<Home />} />
            {/* <Home path="/" />
            <MyAccount path="my-account" />
            <SignIn path="sign-in" />
            <Register path="register" />
            <ProductDetails path="product-details/:productId" />
            <Cart path="/cart" /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
