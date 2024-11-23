import React from "react";

// Array of image paths
const imagePaths = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
];

const App = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {imagePaths.map((imagePath, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <img
            src={imagePath}
            alt={`Image ${index + 1}`}
            style={{ width: "200px", height: "auto", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
