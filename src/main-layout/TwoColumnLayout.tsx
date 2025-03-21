import React from "react";
import "./TwoColumnLayout.scss"; // Import CSS file

const TwoColumnLayout = () => {
  return (
    <div className="container">
      <div className="left-column">
        <h2>Left Column</h2>
        <p>This is the left column content.</p>
      </div>
      <div className="right-column">
        <h2>Right Column</h2>
        <p>This is the right column content.</p>
      </div>
    </div>
  );
};

export default TwoColumnLayout;