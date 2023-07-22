import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function FavCard(product) {
  //the product is deleted from the bag

  const Add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/bag/add", {
        title: product.product.title,
        text: product.product.text,
        image: product.product.image,
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
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.product.image} />
      <Card.Body>
        <Card.Title>{product.product.title}</Card.Title>
        <Card.Text>{product.product.text}</Card.Text>
        <Button variant="primary" onClick={() => Delete(product.product._id)}>
          Delete
        </Button>

        <Button variant="primary" onClick={Add}>
          Add
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FavCard;
