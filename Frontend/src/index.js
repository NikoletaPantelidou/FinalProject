import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const stripePromise = loadStripe(
  "pk_live_51NbKQ0HikTenRkPO0cauM2G37TEaxr9IZAQM0S8VS4hblzxKGmOCojfa3eauFfeE93toOKvMEduBfVs4lgZkiR5d00QZSXmemD"
);
root.render(
  <GoogleOAuthProvider clientId="889501153798-5ilitssrdhbef40dihg1h8p98psre3gm.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
