import React, { useEffect, useRef } from "react";
import Sankul1 from './../assets/Sankul1.jpeg';
import Sankul2 from './../assets/Sankul2.jpeg';
import Sankul3 from './../assets/Sankul3.jpeg';
const images = [
    Sankul1,
    Sankul2,
    Sankul3
];

const CustomMarquee = () => {
  const marqueeRef = useRef(null);
  let scrollSpeed = 1;

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrameId;

    const scrollMarquee = () => {
      if (marquee) {
        marquee.scrollLeft += scrollSpeed;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollMarquee);
    };

    animationFrameId = requestAnimationFrame(scrollMarquee);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={marqueeRef}
      style={{
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "50%",
      }}
    >
      <div style={{ display: "flex" }}>
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`marquee-${index}`} style={{ width: "200px", height: "100px", marginRight: "10px" }} />
        ))}
      </div>
    </div>
  );
};

export default CustomMarquee;