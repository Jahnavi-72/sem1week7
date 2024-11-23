import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus Input </h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus"
      />
      <br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FocusInput />
    </div>
  );
};

export default App;
