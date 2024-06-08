import React from "react";
export default function Listitem({list, onDeleteItem}){
    // const List = ["Work Out","Learning React", "Pray", "Working"]
    // Membuat fungsi menangani penghapusan item dari list
    const handleDelete = (i) => {
      // Panggil fungsi onDeleteItem dari parent component (App.js)
      onDeleteItem(i);
    } 
    return(
        <div>
            <h2>Todo List</h2>
      <ul className='list'>
        {list.map((item, i)=>
      <li key={i}>
        <label>
          <input type='checkbox'></input>
          {item}
        </label>
        <button className='btn btn-danger' 
        onClick={() => handleDelete(i)}>Delete</button>
      </li>)}
      </ul>
        </div>
    )
}