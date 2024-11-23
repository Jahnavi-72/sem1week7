import React from 'react'

const Greeting=()=>{
  const currenthour = new Date().getHours();

  const getgreetingMessage=()=>{
    if(currenthour<12)
    {
      return "Good Morning";
    }
    else if(currenthour<18)
    {
      return  "Good Afternoon";
    }
    else{
      return "Good Night"
    }
  };

  return(
    <div>
      <h1>{getgreetingMessage()}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div><Greeting/></div>
  );
};

export default App