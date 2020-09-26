import React, { useState } from 'react';
import Form from './components/Form';

import TodoList from './components/TodoList';

function AddStudent() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
       <header>
  <h1 style={{textAlign:"center"}}>Mentor Task List </h1>
    </header>
    <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default AddStudent;
