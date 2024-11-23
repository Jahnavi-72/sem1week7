import React, { useState, useRef, useEffect } from "react";

// Sample data for recipes
const recipesData = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: ["pasta", "tomato", "beef", "garlic", "onion"],
    image: "./assets/img1.jpeg", 
    instructions: "Cook pasta. Prepare sauce with beef, tomatoes, and spices.",
  },
  {
    id: 2,
    name: "Chicken Caesar Salad",
    ingredients: ["chicken", "lettuce", "parmesan", "croutons", "caesar dressing"],
    image: "./assets/img2.jpeg", 
    instructions: "Grill chicken. Mix lettuce with dressing. Add chicken and croutons.",
  },
  {
    id: 3,
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce", "ginger"],
    image: "./assets/img3.jpeg", // Make sure the image is in the assets folder
    instructions: "Stir fry vegetables in a wok with soy sauce and ginger.",
  },
  // Add more recipes as needed
];

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData); // Filtered recipes based on search
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Selected recipe for details view
  const searchInputRef = useRef(null); // Reference for search input

  // Focus on search bar when the page loads
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // Handle search input changes
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter recipes based on name or ingredient
    const filtered = recipesData.filter((recipe) =>
      recipe.name.toLowerCase().includes(value) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(value)
      )
    );

    setFilteredRecipes(filtered);
  };

  // Handle recipe selection
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle back to list view
  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Recipe Finder</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a recipe by name or ingredient..."
        value={searchTerm}
        onChange={handleSearch}
        ref={searchInputRef}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Conditional Rendering for Recipe List or Recipe Details */}
      {selectedRecipe ? (
        // Detailed view of a selected recipe
        <div>
          <button onClick={handleBackToList} style={{ marginBottom: "20px" }}>
            Back to Recipes
          </button>
          <h2>{selectedRecipe.name}</h2>
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            style={{ width: "300px", height: "auto", borderRadius: "8px" }}
          />
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
        </div>
      ) : (
        // Recipe list view
        <div>
          {filteredRecipes.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => handleRecipeClick(recipe)}
                  style={{
                    cursor: "pointer",
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "8px",
                    width: "200px",
                    textAlign: "center",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                  <h3>{recipe.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            // No recipes found message
            <p>No recipes found matching your search.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;
