import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
function FavCard(product) {
  //the product is deleted from the bag
  const [showConfirmation, setShowConfirmation] = useState(false);
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
        window.alert("Your product has been added to your shopping bag!");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  const Delete = (id) => {
    axios
      .delete("http://localhost:4000/favourites/" + id)
      .then((data) => {
        window.alert("Your product has been deleted from the favourites!");
        window.location.reload();
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteConfirmation = (id) => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = (id) => {
    setShowConfirmation(false);
    Delete(id);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.product.image} />
      <Card.Body>
        <Card.Title>{product.product.title}</Card.Title>
        <Card.Text>{product.product.text}</Card.Text>
        <Card.Text>{product.product.price}</Card.Text>
        <Button
          variant="danger"
          onClick={() => handleDeleteConfirmation(product.product._id)}
        >
          Delete
        </Button>

        <Button variant="primary" onClick={Add}>
          Add
        </Button>
      </Card.Body>
      {showConfirmation && (
        <div className="confirmation">
          <p>Are you sure you want to delete this product?</p>
          <Button
            variant="danger"
            onClick={() => handleConfirmDelete(product.product._id)}
          >
            Confirm Delete
          </Button>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
        </div>
      )}
    </Card>
  );
}

export default FavCard;
