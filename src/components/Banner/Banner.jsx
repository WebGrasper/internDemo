import "./BannerStyle.css";
import React, { useState, useEffect } from "react";

const Banner = (props) => {
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ee78de50f9dbe993.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dd0c71d328eabf5c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ad13d197ab22003b.png?q=20",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  });

  return (
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          Previous
        </button>
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      </div>
  );
};

export default Banner;

