import "./components/todo/todo.css";
import TodoDisplay from "./components/todo/TodoDisplay";
import TodoInput from "./components/todo/TodoInput";
import react_logo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
    const theanh = "control";
    const data = {
      address: "TPHCM",
      country: "Vietnam"
    }
    
    const [todoList, setTodoList] = useState([
      {id: 1, name: "Learning React"},
      {id: 2, name: "Learning HTML"},  
    ])

    const addNewTodo = (text) =>{
      alert(`call me ${text}`);
    }
    //{key: value}
  return (
    <div className="todo-container">
        <div className="fs-2 text-center text-danger fw-bold">ToDo List</div>
        <TodoInput
         addNewTodo={addNewTodo}
        />
        <TodoDisplay
          name = {theanh}
          data = {data}
          todoList = {todoList}
        />
        <div className="text-center fs-2">
          <img className = "logo"src={react_logo}/>
        </div>
    </div>
  )
}

export default App
