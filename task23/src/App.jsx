import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);


  const timerRef = useRef(null);

 
  const startTimer = () => {
    if (timerRef.current) return; 

    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1); 
    }, 1000);
  };

  
  const stopTimer = () => {
    clearInterval(timerRef.current); 
    timerRef.current = null; 
  };

  
  const resetTimer = () => {
    clearInterval(timerRef.current); // Clear the interval
    timerRef.current = null; // Reset timerRef
    setTime(0); // Reset the time to 0
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Stopwatch />
    </div>
  );
};

export default App;
