import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import LoginSignIn from "./Pages/Login-Signin";
import CoverPage from "./Pages/Cover";
import Auth from "./Pages/Auth";
import HomePage from "./Pages/Homepage";
import Details from "./Pages/DetailsProduct";
import Bag from "./Pages/User'sBag";
import Favourites from "./Pages/User'sFav";
import MyAccount from "./Pages/User'sAcc";

function App() {
  return (
    <Routes>
      <Route path="/user/auth" element={<Auth />} />
      <Route path="/user/login" element={<LoginSignIn />} />
      <Route path="/user/signin" element={<LoginSignIn />} />
      <Route path="/" element={<CoverPage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/account" element={<MyAccount />} />
    </Routes>
  );
}

export default App;
