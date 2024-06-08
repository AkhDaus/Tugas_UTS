import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Listitem from './Listitem';
export default function App() {
  // State untuk menyimpan todolist 
  const [todoList, setTodoList] = useState([]);
  // Membuat fungsi menambahkan todo kedalam todolist
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  // Membuat fungsi hapus todolist
  const deleteTodo = (i) => {
    const updatedList = [...todoList];
    updatedList.splice(i, 1);
    setTodoList(updatedList);
  };
  function Coba(){
    return(
      "coba saja"
    )
  }
  return (
      <div>
       <Form onAddtodo={addTodo} />
      <Listitem list={todoList} onDeleteItem={deleteTodo} />
    </div>
  );
}


