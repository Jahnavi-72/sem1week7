import React, { useState } from 'react';

const InputState = () => {
  // Initialize state to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to update the state when the input value changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Input State Example</h1>

      {/* Text input field */}
      <input
        type="text"
        value={inputValue} // Bind input value to state
        onChange={handleInputChange} // Update state on change
        placeholder="Type something..."
      />

      {/* Display the input value */}
      <p>You typed: {inputValue}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <InputState />
    </div>
  );
};

export default App;
