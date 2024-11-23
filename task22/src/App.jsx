import React, { useState, useRef } from 'react';

const CounterWithPrevious = () => {
  
  const [count, setCount] = useState(0);


  const previousCountRef = useRef();

 
  React.useEffect(() => {
    previousCountRef.current = count; 
  }, [count]); 


  const increment = () => {
    setCount(count + 1);
  };


  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter with Previous Value</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCountRef.current}</p> 
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CounterWithPrevious />
    </div>
  );
};

export default App;
