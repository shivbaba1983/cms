import React, { useState } from "react";
import Sankul1 from './../assets/Sankul1.jpeg';
import Sankul2 from './../assets/Sankul2.jpeg';
import Sankul3 from './../assets/Sankul3.jpeg';
const images = [
    Sankul1,
    Sankul2,
    Sankul3
//   "https://via.placeholder.com/800x400?text=Slide+1",
//   "https://via.placeholder.com/800x400?text=Slide+2",
//   "https://via.placeholder.com/800x400?text=Slide+3",
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: "center", position: "relative", width: "500px", margin: "auto" }}>
      <button onClick={prevSlide} style={{ position: "absolute", left: 0, top: "50%" }}>❮</button>
      <img src={images[currentIndex]} alt="slide" style={{ width: "90%" }} />
      <button onClick={nextSlide} style={{ position: "absolute", right: 0, top: "50%" }}>❯</button>
    </div>
  );
};

export default CustomSlider;