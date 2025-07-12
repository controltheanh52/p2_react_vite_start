const TodoDisplay = (props) => {
    //props: is an object{} (object desctructuring)
    //console.log("check props: " , props);
    
    //method 1: popular
    const{todoList} = props;

    //method 2: beginner const variableName = props.key;
    //method 3: take directly {name} lazy
    return(
        <div className="d-flex flex-column justify-content-center text-center">
          {todoList.map((item, index) => {
            
            return (
              <div className="todoDisplay">
                <div>{item.name}</div>
                <button>delete</button>
              </div>
            )
          })}
          
        </div>
    )
}

export default TodoDisplay;