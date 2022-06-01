import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/food.jpg";
import image2 from "../assets/images/brewdog.jpg";
import image3 from "../assets/images/tinypeople.png";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div>
          <img src={image1} />
          <p className="legend">We have tiny but amazing food!</p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">
            We have beer from the best breweries in the world!
          </p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">Holy shit! We go tiny people!</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
