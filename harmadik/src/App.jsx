import React, {useState, useEffect} from 'react';
import './App.css';

export const App = () => {
  const [items, setItems] = useState([])
  const [type, setType] = useState("comment")

  useEffect(()=> {
    fetch("https://localhost:7231/" + type)
    .then((res) => (res.ok? res.json() : []))
    .then((data)=> setItems(data))
  }, [type]);


  return (
    <div className='container'>
      <div className='row m-5 border p-5'>
        <FormCoponent setType={setType}/>
        <ListComponent items={items}/>
      </div>
    </div>
  );
}

const FormCoponent = ({ setType }) => (
  <form
    className='w-100'
    onSubmit={(event)=>{
      event.preventDefault();
      setType(event.target.elements.contentType.value)
    }}>
        <select
        name='contentType'
        className='form-control mb-2' >
          <option value='comment'>Kommentek</option>
          <option value="post">Posztok</option>
        </select>
        <button className='btn btn-primary' type='submit'>Kiválasztás</button>
    </form>
)

const ListComponent = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} className='list-group-item'>
        {item.id} {item.body}
      </li>
    ))}
  </ul>
)



