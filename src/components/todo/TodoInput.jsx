const TodoInput = (props) =>{

    console.log(">>> check point: ", props);
    const {addNewTodo} = props;
    //addNewTodo();


    const handleClick = () =>{
      alert("handle click button")
    }

    const handleOnchange = (event) =>{
      console.log("handlOnChange", event.target.value);
    }
    return(
        <div className="d-flex justify-content-center mt-2">
          <input type="text" placeholder="Enter your task" className="form-control-sm"
          onChange={handleOnchange}
          ></input>
          <button className="btn btn-primary" onClick={handleClick}>Add</button>
        </div>
    );
}

export default TodoInput;