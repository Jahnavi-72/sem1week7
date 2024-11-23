import React, { useState } from 'react';

const ThemeToggler = () => {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

 
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const lightTheme = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  const darkTheme = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={isDarkTheme ? darkTheme : lightTheme}>
      <h1>{isDarkTheme ? 'Dark' : 'Light'} Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ThemeToggler />
    </div>
  );
};

export default App;
