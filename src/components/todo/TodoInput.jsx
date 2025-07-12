import { useState } from "react";

const TodoInput = (props) =>{

    //useState hook
    //const valueUserInput = "";
    //destructuring Array
    const [valueUserInput, setValueInput] = useState("")
    console.log(">>> check point: ", props);
    const {addNewTodo} = props;
    //addNewTodo();


    const handleClick = () =>{
      console.log("check: ", valueUserInput);
      addNewTodo(valueUserInput);
      setValueInput("");
    }

    const handleOnchange = (name) =>{
      setValueInput(name);
    }

    //onChange ={() => function} using arrow function for the function that have a diffrent parameter
    return(
        <div className="d-flex justify-content-center mt-2">
          <input 
          type="text" placeholder="Enter your task" className="form-control-sm"
          onChange={(event) => handleOnchange(event.target.value)}

          value = {valueUserInput}
          ></input>

          <button className="btn btn-primary" onClick={handleClick}>Add</button>
        </div>
    );
}

export default TodoInput;