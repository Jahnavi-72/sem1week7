import React, { useState } from "react";

// Import images for light and dark themes
import lightThemeImage from "./light-theme-image.jpeg";
import darkThemeImage from "./dark-theme-image.jpeg";

const App = () => {
  // State to track the current theme (light or dark)
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

      {/* Render image based on the theme */}
      <img
        src={theme === "light" ? lightThemeImage : darkThemeImage}
        alt={theme === "light" ? "Light Theme" : "Dark Theme"}
        style={{ width: "300px", height: "auto", borderRadius: "8px" }}
      />

      {/* Button to toggle between themes */}
      <button
        onClick={toggleTheme}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
