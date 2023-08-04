import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import BagCard from "../Components/BagCard";

export default function Bag() {
  const [products, setBag] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/bag/")
      .then((data) => setBag(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user-bag-container">
      <NavigationBar />
      <div className="bag-cards">
        {products.length === 0 ? (
          <p className="bag-msg">Your bag is empty.</p>
        ) : (
          products.map((product) => (
            <BagCard key={product._id} product={product} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}
