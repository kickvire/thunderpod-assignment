import React from 'react'

function Todo({todo,text,todos,setTodos}) {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
           
  }
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item,completed:!item.completed

        }
      }
      return item;
    }))

  }

  
  return (
    <div className="todo">
      <li style={{border:"1px solid teal",height:"40px"}} className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
      <button style={{margin:"2px",height:"40px"}}  onClick={completeHandler} className="complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <button style={{margin:"2px",height:"40px"}}  onClick={deleteHandler} className="complete-btn">
      <i className="fa fa-trash"></i>
      </button>
      
    </div>
  )
}

export default Todo
