import React from 'react'

const UserTable=({users})=>{
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>(
          <tr key={index}>
            <th>{user.name}</th>
            <th>{user.email}</th>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

const array=[
  {name:"chinny", email:"Chinny@2005"},
  {name:"nandu",email:"Nandu@2005"}
];

const App = () => {
  return< UserTable users={array}/>
}

export default App