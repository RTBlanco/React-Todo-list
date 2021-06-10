import { useState } from 'react';
import './App.css';
import Form from './Form';
import Display from './Display';
import {ItemObject} from './itemObject';

function App() {

  const [items, setItems] = useState({items:[]})

  const addItem = (newItem) => {
    let item = new ItemObject(newItem)
    setItems({
      items: [item, ...items.items]
    })
  } 

  const removeItem = (item) => {
    let newItems = items.items.filter(i=> i.id !== item.id)
    ItemObject.delete(item)
    setItems({
      items: [...newItems]
    }) 
  }

  return (
    <>
      <Form addItem={addItem} />
      <Display items={items.items} removeItem={removeItem}/>
    </>
  );
}

export default App;
