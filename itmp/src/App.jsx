import React, {useState, useEffect} from 'react';
import './App.css';

export const App = () => {
  const [items, setItems] = useState([])

  useEffect(()=> {
    fetch("https://itmp.sulla.hu/users")
    .then((res) => (res.ok? res.json() : []))
    .then((data)=> setItems(data))
  });

  return (
    <div className='container'>
      <ListComponent items={items}/>
    </div>
  );
}

const ListComponent = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} className='list-group-item'>
        {item.name} - {item.email}
      </li>
    ))}
  </ul>
)
