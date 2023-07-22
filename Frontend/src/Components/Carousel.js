import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Components/ExampleCarouselImage";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledCarousel() {
  const images = [
    {
      imageUrl:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/7555/326/712//01/7555326712_1_3_4.jpg?t=1689243469513",
    },
    {
      imageUrl:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/6172/692/520/1fb42e1c94d4e4a11265211b0bf1d6ae-6172692520_1_3_0.jpg?imwidth=750&impolicy=bershka-itxmediumhigh&imformat=chrome",
    },
    {
      imageUrl:
        "https://static.pxlecdn.com/photos/593713185/xl/3f42df55003faa616069.jpg",
    },
  ];
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage images={images} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage images={images} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage images={images} />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;
