import React, { useState } from 'react';

const ToggleVisibility = () => {
  // State to manage visibility
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Visibility Example</h1>

  
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>

      
      {isVisible && <p>This is a toggled paragraph! You can hide or show this text.</p>}

  
      {isVisible && (
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          style={{ marginTop: '20px' }}
        />
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ToggleVisibility />
    </div>
  );
};

export default App;
