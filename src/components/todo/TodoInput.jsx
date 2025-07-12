const TodoInput = (props) =>{

    console.log(">>> check point: ", props);
    const {addNewTodo} = props;
    //addNewTodo();


    const handleClick = () =>{
      alert("handle click button")
    }

    const handleOnchange = (name) =>{
      console.log("handlOnChange", name);
    }

    //onChange ={() => function} using arrow function for the function that have a diffrent parameter
    return(
        <div className="d-flex justify-content-center mt-2">
          <input type="text" placeholder="Enter your task" className="form-control-sm"
          onChange={(event) => handleOnchange(event.target.value)}
          ></input>


          <button className="btn btn-primary" onClick={handleClick}>Add</button>
        </div>
    );
}

export default TodoInput;