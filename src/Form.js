import { useState } from "react";

function Form({addItem}) {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(value);
    setValue('')
    console.log('item was added')
  }

  const handleChange = (e) =>{
    setValue(e.target.value);
  }

  return (
    <form id="main-form" onSubmit={handleSubmit}>
      <label htmlFor="item">Item name </label>
      <input type="text" id="item" name="item" value={value} onChange={handleChange}/>
      <input type="submit" value="Submit" />
    </form>
  )
};

export default Form;