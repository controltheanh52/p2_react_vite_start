import "./components/todo/todo.css";
import TodoDisplay from "./components/todo/TodoDisplay";
import TodoInput from "./components/todo/TodoInput";
import react_logo from "./assets/react.svg";
const App = () => {

  return (
    <div className="todo-container">
        <div className="fs-2 text-center text-danger fw-bold">ToDo List</div>
        <TodoInput/>
        <TodoDisplay/>
        <div className="text-center fs-2">
          <img className = "logo"src={react_logo}/>
        </div>
    </div>
  )
}

export default App
