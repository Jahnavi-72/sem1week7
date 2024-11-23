import React from 'react'

const App = () => {
  let array=["sugar","wheat","rice","soaps","paste","magie"];
  return (
    <div>
      {array.map((data)=>{return <h2> {data}</h2>})}
    </div>
  )
}

export default App
