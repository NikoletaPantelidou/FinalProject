import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import UncontrolledCarousel from "../Components/Carousel";

function CoverPage() {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className=" div-carousel">
        <UncontrolledCarousel />
      </div>
      <Footer />
    </div>
  );
}
export default CoverPage;
