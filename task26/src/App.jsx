import React from 'react';
import myImage from './assets/img1.jpeg';

const DisplayImage = () => {
  return (
    <div>
      <h1>Displaying an Image</h1>
      <img src={myImage} alt="My Image" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DisplayImage />
    </div>
  );
};

export default App;
