import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import FavCard from "../Components/FavCards";

export default function Favourites() {
  const [products, setFav] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/favourites/")
      .then((data) => setFav(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="fav-cards">
        {products.length === 0 ? (
          <p className="fav-msg">Your favorites' list is empty.</p>
        ) : (
          products.map((product) => (
            <FavCard key={product._id} product={product} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}
