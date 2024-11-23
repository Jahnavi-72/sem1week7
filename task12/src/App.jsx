import React, { useState } from 'react';

const HoverBox = () => {
  const [bgColor, setBgColor] = useState('lightgray');

  const handleMouseEnter = () => {
    setBgColor('pink');
  };

  const handleMouseLeave = () => {
    setBgColor('lightgray');
  };

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: bgColor,
        border: '2px solid black',
        textAlign: 'center',
        lineHeight: '200px',
        transition: 'background-color 0.3s ease', 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover over me!
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Mouse Hover Event Example</h1>
      <HoverBox />
    </div>
  );
};

export default App;
