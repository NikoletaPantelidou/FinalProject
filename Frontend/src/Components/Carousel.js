import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Components/ExampleCarouselImage";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledCarousel() {
  const images = [
    {
      imageUrl:
        "https://ceftandcompany.com/wp-content/uploads/2009/02/ceft-and-company-ny-agency-adore-fashion-advertising-reid-kastyn-glen-lutchford-03.jpg",
    },
    {
      imageUrl:
        "https://cmmodels.com/wp-content/uploads/2015/10/model-fuer-werbung-werbemodels-video-tv-mode-spot-mann-frau-paar-innenstadt-city-liebe.jpg",
    },
    {
      imageUrl:
        "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTUyNzE3MDg3NjQxNDQ1OTI2/master_chloe_ss18_fashion1_1920x1080.jpg",
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
