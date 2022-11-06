import { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodoLists from './Components/TodoLists';
import "./styles.css";
function App() {
 const initialState = JSON.parse(localStorage.getItem('todos')) || [] ;

  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodos, setEditTodos] = useState(null);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <div className="App">
      <div className="todo-wrapper">
     <div className="todoLists-container">
      <div className="todo-interface">
        <Form inputs = {inputs} setInputs = {setInputs} todos = {todos} setTodos = {setTodos} editTodos = {editTodos} setEditTodos = {setEditTodos} />
        <TodoLists todos = {todos} setTodos = {setTodos} editTodos = {editTodos} setEditTodos = {setEditTodos}/>
      </div>
      </div>
      
     </div>
    </div>
  );
}

export default App;
