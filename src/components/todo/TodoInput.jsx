const TodoInput = (props) =>{

    console.log(">>> check point: ", props);
    const {addNewTodo} = props;
    //addNewTodo();
    return(
        <div className="d-flex justify-content-center mt-2">
          <input type="text" placeholder="Enter your task" className="form-control-sm"></input>
          <button className="btn btn-primary">Add</button>
        </div>
    );
}

export default TodoInput;