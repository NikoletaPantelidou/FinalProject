import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledCarousel() {
  const images = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-photo/two-young-beautiful-smiling-hipster-girls-trendy-white-sweater-coat_158538-16930.jpg",
    },
    {
      imageUrl:
        "https://assets.vogue.com/photos/5f5fac8b7d9362f52d645560/16:9/w_1280,c_limit/social-holding.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/108329358/photo/blonde-woman-in-wild-patterned-dress.jpg?s=612x612&w=0&k=20&c=tSrU_HjEw3s5r9GUIWS2EBnNkBnBHX7VswmkEoMZ0As=",
    },
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.imageUrl} alt={image.text} />
          <p>{image.text}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledCarousel;
