import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselWithDots() {
  return (
    <div className="carousel-container">
      <Carousel
        interval={2000}
        pause={false} // Adjust autoplay interval as needed
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
        indicators={false}
        wrap={true} // Enable infinite mode
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/svg/a1.svg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/svg/a2.svg`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/svg/a3.svg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselWithDots;
