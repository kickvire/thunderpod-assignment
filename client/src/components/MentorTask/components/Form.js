import React from 'react';
import '../../EditStudent/EditStudent.css';
import './Form.css';
function Form({setStatus,inputText,setInputText,todos,setTodos}) {
  const inputTextHandler = (e) => {
     console.log(e.target.value);
     setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
    setInputText("");

  }
  return (
   
      <form  style={{marginLeft:"35%",display:"flex"}}>
      <input style={{width:"35%"}} value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button style={{display:"inline",marginTop:"15px",marginLeft:"10px"}} className="todo-button Add-Student-Submit fa fa-plus"  onClick={submitTodoHandler } type="submit">
      </button>
    
    </form>
      
   
  )
}

export default Form
