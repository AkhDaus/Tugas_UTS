import React, {useState}  from "react";
export default function Form({onAddtodo}){
    //Membuat State untuk menyimpan Input
    const [inputValue, setInputValue] = useState("");
    // Membuat handler untuk menangani perubahan nilai input
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    // Membuat fungsi untuk menangani Submit Form
    const handleSubmit = (event) => {
      event.preventDefault();
      // Memanggil fungsi addtodo yg dikirim dari App.js dengan nilai input sebagai argumen 
      onAddtodo(inputValue);
      // Kemudian reset nilai input
      setInputValue("");
    }
  return(
        <div>
            <h1 className='header'>My Todo Apps</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>New List</label>
          <input id='item' value={inputValue} onChange={handleChange}></input>
          <button className='btn' type="submit">Add</button>
        </div>
      </form>
        </div>
    )
}
