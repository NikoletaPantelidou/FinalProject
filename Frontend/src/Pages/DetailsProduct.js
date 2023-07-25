import React, { useEffect } from "react";
import { useState } from "react";
import DropdownBar from "../Components/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/" + id)
      .then((data) => setProduct(data.data))

      .catch((error) => console.log(error));
  });

  //the product is added to the bag
  const Add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/bag/add")
      .then((data) => {
        window.alert("Your product has been added!");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <NavigationBar />
      <div className="container-product">
        <img className="photo-product" alt="" src={product.image}></img>
        <p className="title">{product.title}</p>
        <p className="text"> {product.text}</p>
        <p className="price">{product.price}</p>
        <button className="add-btn" onClick={Add}>
          Add
        </button>
        <DropdownBar />
      </div>
      <Footer />
    </div>
  );
}

export default Details;
