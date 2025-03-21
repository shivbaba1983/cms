import React from "react";
import "./Marquee.scss"; // Import CSS file

const CustomMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <p> !! श्रीगणेशा व्यवसायाचा, वेध उज्वल भविष्याचा - उद्योजकांसाठी सुववर्णसंधी !! भावी उद्योजकांचे हार्दिक स्वागत !!</p>
      </div>
    </div>
  );
};

export default CustomMarquee;

// import React, { useEffect, useRef, useState } from "react";

// const CustomMarquee = () => {
//   const textRef = useRef(null);
//   const [position, setPosition] = useState(100);

//   useEffect(() => {
//     let animationFrameId;
    
//     const moveText = () => {
//       setPosition((prev) => (prev <= -100 ? 100 : prev - 1));
//       animationFrameId = requestAnimationFrame(moveText);
//     };

//     animationFrameId = requestAnimationFrame(moveText);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div style={{ overflow: "hidden", width: "100%", whiteSpace: "nowrap", backgroundColor: "#FF7F7F", color: "#fff", padding: "10px" }}>
//       <p ref={textRef} style={{ position: "relative", left: `${position}%`, transition: "left 1s linear" }}>
//       !!! वेध उज्वल भविष्याच्या - उद्योजकांसाठी सुववर्णसंधी !!!. 🚀
//       </p>
//     </div>
//   );
// };

// export default CustomMarquee;

// import React, { useEffect, useRef } from "react";
// import Sankul1 from './../assets/Sankul1.jpeg';
// import Sankul2 from './../assets/Sankul2.jpeg';
// import Sankul3 from './../assets/Sankul3.jpeg';
// const images = [
//     Sankul1,
//     Sankul2,
//     Sankul3
// ];

// const CustomMarquee = () => {
//   const marqueeRef = useRef(null);
//   let scrollSpeed = 1;

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     let animationFrameId;

//     const scrollMarquee = () => {
//       if (marquee) {
//         marquee.scrollLeft += scrollSpeed;
//         if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
//           marquee.scrollLeft = 0;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scrollMarquee);
//     };

//     animationFrameId = requestAnimationFrame(scrollMarquee);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div
//       ref={marqueeRef}
//       style={{
//         display: "flex",
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         width: "50%",
//       }}
//     >
//       <div style={{ display: "flex" }}>
//         {images.concat(images).map((src, index) => (
//           <img key={index} src={src} alt={`marquee-${index}`} style={{ width: "200px", height: "100px", marginRight: "10px" }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomMarquee;