import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";

function BagCard(product) {
  //the product is deleted from the bag
  const [showConfirmation, setShowConfirmation] = useState(false);

  const Delete = (id) => {
    axios
      .delete("http://localhost:4000/bag/" + id)
      .then((data) => {
        window.alert("Your product has been deleted!");
        window.location.reload();
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
          variant="primary"
          onClick={() => handleDeleteConfirmation(product.product._id)}
        >
          Delete
        </Button>

        <Button variant="primary">Buy</Button>
      </Card.Body>
      {showConfirmation && (
        <div>
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

export default BagCard;
