import React,{useEffect} from 'react'

const Form = ({inputs, setInputs, todos, setTodos, editTodos, setEditTodos}) => {


    const handleChange = (e) => {
      setInputs(e.target.value)
    }
  const updateTodos = (title, id, completed) => {
    const newTodos = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
      )
      setTodos(newTodos);
      setEditTodos('')

  }
  useEffect(( ) =>{ 
    if(editTodos) {
      setInputs(editTodos.title)
  }else{
    setInputs("")
  }
}, [setInputs, editTodos])

    const handleClick = (e) => {
     e.preventDefault();
     if(!editTodos) {
      if(inputs === "") {
        alert("Please enter a valid task")
      return; 
    }else{
        setTodos([...todos, {title:inputs, id: Math.random() * 100, completed:false}])
         setInputs('');
     }

    } else {
     updateTodos(inputs,editTodos.id, editTodos.completed)
    }
    }

  return (
    <form>
        <input 
        className = "inputs" 
        type="text" 
        placeholder='Enter tasks..' 
        required
        value={inputs}
        onChange={handleChange}/>
        <button onClick={handleClick}>{editTodos ? "Ok": "Add"}</button>
    </form>
  )
}

export default Form