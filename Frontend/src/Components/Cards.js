import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

function ProductCard(product) {
  //the product is added to the bag

  const Add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/bag/add", {
        title: product.product.title,
        text: product.product.text,
        image: product.product.image,
        price: product.product.price,
      })

      .then((data) => {
        window.alert("Your product has been added!");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const AddtoFav = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/favourites/add", {
        title: product.product.title,
        text: product.product.text,
        image: product.product.image,
        price: product.product.price,
      })

      .then((data) => {
        window.alert("Your product has been added to favourites!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.product.image} />
      <Card.Body>
        <Card.Title>{product.product.title}</Card.Title>
        <Card.Text>{product.product.text}</Card.Text>
        <Card.Text>{product.product.price}</Card.Text>
        <Button variant="primary" onClick={Add}>
          Add
        </Button>

        <Link to={`/details/${product.product._id}`}>
          <Button variant="primary">View</Button>
        </Link>

        <FaHeart onClick={AddtoFav} />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
