import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/Cards";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //all products appear on the page
  useEffect(() => {
    axios
      .get("http://localhost:4000/product/")
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container-home">
      <NavigationBar />
      <div className="search">
        <input
          className="input-search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by type..."
        />

        <button className="search-btn">
          <FaSearch />
        </button>

        {
          <div className="product-cards">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        }

        <Footer />
      </div>
    </div>
  );
}
