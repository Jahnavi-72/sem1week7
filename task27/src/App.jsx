import React, { useState } from "react";
import backgroundImage from "./img1.jpeg"; // Import the image with the correct path

const App = () => {
  const [image, setImage] = useState(backgroundImage); // Set the background image using state

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,  // Correctly set background image with string interpolation
        backgroundSize: "cover",           // Ensure the image covers the div
        backgroundPosition: "center",      // Center the image
        backgroundRepeat: "no-repeat",     // Prevent repeating the image
        width: "100%",                     // Full width
        height: "100vh",                   // Full viewport height
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "40vh" }}>
        Welcome to My Page
      </h1>
    </div>
  );
};

export default App;
