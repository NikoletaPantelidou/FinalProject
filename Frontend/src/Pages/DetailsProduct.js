import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";

function Details() {
  // const [title, setTitle] = useState();
  // const [text, setText] = useState();
  //const [image, setImage] = useState();

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
        <img
          className="photo-product"
          alt=""
          src="https://i.factcool.com/cache2/1400x1400/catalog/products/12/e5/17/12-e5-175dfc28ssu4375ro_0.jpg"
        ></img>
        <p className="type"> Dress</p>
        <p className="price"> Price: 40$</p>
        <button className="add-btn" onClick={Add}>
          Add
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
