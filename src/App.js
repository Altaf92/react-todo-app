import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  const addItem =(event)=>{
    setList(event.target.value);
  }

  const listItem = () => {
    setItems((arrItem, index)=>{
      return (
        [...arrItem, list]
      )  
    })
    setList("");
  }

  const deleteItem = (id) => {
    console.log("deleted")
    setItems((oldItems)=>{
        return oldItems.filter((arrELem, index)=>{
            return index !== id;
        })
    })
}
    
  return (
    <div className="main-div App">
      <div className="center-div">
        <h1>Todo App</h1> <br />
        <input type="text" placeholder='Add item' value={list} onChange={addItem} />
        <button onClick={listItem}>Add Item</button>

        <ul>
          {
            items.map((item, index)=>{
              return <TodoList 
              item = {item}
              key={index}
              id = {index}
              onSelect={deleteItem}
              />
            })
          }
        </ul>

      </div>
    </div>
  );
}

export default App;
