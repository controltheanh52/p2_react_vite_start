const TodoDisplay = (props) => {
    //props: is an object{} (object desctructuring)
    //console.log("check props: " , props);
    
    //method 1: popular
    const{name, age, data, todoList} = props;

    //method 2: beginner const variableName = props.key;
    //method 3: take directly {name} lazy
    return(
        <div className="d-flex flex-column justify-content-center text-center">
          <div>My name is {name}</div>
          <div >Learning React</div>
          <div>{JSON.stringify(todoList)}</div>
        </div>
    )
}

export default TodoDisplay;