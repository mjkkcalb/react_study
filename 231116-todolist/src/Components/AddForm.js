import React, { useState } from 'react';
import './AddForm.css';

const AddForm = () => {
const [txt, setTxt] = useState("")
const [data, setData] = useState([]);
const [isCheck,setIsCheck]=useState(false);


  const listItem = (evt)=>{
    const {value} = evt.target;
    setTxt(value);
  }

  const addItem =()=> {
    if (txt === "") {
      alert("내용을 작성해 주세요");
      return;
    }
    setData((prevItem) => [...prevItem, { id: prevItem.length, text: txt }]);
    setTxt(""); 
  };

  const onCheck = (id) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      );
    });
  };

  const removeItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <section className='todoBox'>
      <h1 className='title'>🌻to do list🌻</h1>
      <input type="text" value={txt} onChange={listItem} className='txtInput'/>
      <button onClick={addItem} className='addBtn'>✔️</button>
      <ul className='todoList'> 
        {data.map((item)=> (
          <li key={item.id} style={{textDecoration: item.isChecked ? "line-through": "none", color: item.isChecked ? "#888" : "#000"}} className='todoItem'>
            <input type="checkbox" onChange={()=>onCheck(item.id)} checked={item.isCheck} className='todoItemInput'/>
            {item.text}
            <button onClick={() => removeItem(item.id)} className='removeBtn'>🗑️</button>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default AddForm;