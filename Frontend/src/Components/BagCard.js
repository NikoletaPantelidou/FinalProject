import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function BagCard(product) {
  //the product is deleted from the bag

  const Delete = (id) => {
    axios
      .delete("http://localhost:4000/bag/" + id)
      .then((data) => {
        window.alert("Your product has been deleted!");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.product.image} />
      <Card.Body>
        <Card.Title>{product.product.title}</Card.Title>
        <Card.Text>{product.product.text}</Card.Text>
        <Button variant="primary" onClick={() => Delete(product.product._id)}>
          Delete
        </Button>

        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default BagCard;
