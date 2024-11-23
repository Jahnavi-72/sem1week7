import React from 'react'

const App = () => {
  const handleClick=()=>{
    console.log("Button Clicked");
  };
  return (
    <div>
      <h1>Click Event Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};


export default App;