import React from 'react'

const CategoryList = ({categories}) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category,index)=>(
        <li key={category.name}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item,itemIndex)=>(
              <li key={itemIndex}>{item}</li>

            ))}
          </ul>
        </li>
        ))}
      </ul>
    </div>
  );
};
let array=[
  {name:'Fruits',items:['Apple','Banana','Orange','Mango']},
  { name:"Vegetables",items:['Carrot','Spinach','pepper']},
  {name:"Dairy",items:['Milk','cheese','Curd']}
];
const App = () => {
  return <CategoryList categories={array}/>;
};


export default App;