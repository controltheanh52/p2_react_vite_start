import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";
import react_logo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    ])

    const addNewTodo = (name) =>{
      const newTodo = {
        id: randomInt(1, 1000),
        name: name
      }
      setTodoList([...todoList, newTodo])
    }

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id); //remove the same id
        setTodoList(newTodo);
    }

    return(
      <>
      <div className="todo-container">
        <div className="fs-2 text-center text-danger fw-bold">ToDo List</div>
        <TodoInput
         addNewTodo={addNewTodo}
        />


        {todoList.length > 0 ? 
          <TodoDisplay
            todoList = {todoList}
            deleteTodo = {deleteTodo}
          />
          :
          <div className="text-center fs-2">
            <img className = "logo"src={react_logo}/>
          </div>
      
        }
      </div>

      </>
    )

}


export default TodoApp;