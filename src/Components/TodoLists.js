import React from 'react'

const TodoLists = ({todos, setTodos, setEditTodos}) => {


  const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {...item, completed: !item.completed}
      }
      return item;
    }))
  }




  const handleDelete = ({id}) => {
    setTodos(todos.filter(x => x.id !== id))
  }

const handleEdit = ({id}) => {
 const findTodo = todos.find((todo) => todo.id === id )
 setEditTodos(findTodo)
}
   

  return (
    <div className='todoLists'>
      {todos.length === 0 ? <div className='empty'><h4>Your list is empty!</h4></div> :
      todos.map(todo => {
        return <li className='todo' key = {todo.id}>
         <input type="text" 
         className={`list ${todo.completed ? "completed" : ""}`} 
         value={todo.title} 
         onChange = {(e) => e.preventDefault()} />
         <div className="icons">
         <button className="button-complete task-button"  onClick={()=> handleComplete(todo)}>
           <i className='fa fa-check-circle'></i>
         </button>
         <button className="button-edit task-button" onClick = {() => handleEdit(todo)}>
           <i className='fa fa-edit'></i>
         </button>
         <button onClick = {()=> {handleDelete(todo)}} className="button-delete task-button">
           <i className='fa fa-trash'></i>
         </button>
         </div>
         </li>}
       )}
    </div>
  )
}

export default TodoLists;