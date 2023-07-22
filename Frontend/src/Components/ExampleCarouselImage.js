import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExampleCarouselImage = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <div key={index}>
          {/* Replace the image source URL with the desired image */}
          <img src={image.imageUrl} alt={image.text} />
          <p>{image.text}</p>
        </div>
      ))}
    </>
  );
};

export default ExampleCarouselImage;
