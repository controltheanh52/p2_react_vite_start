const TodoDisplay = (props) => {
    //props: is an object{} (object desctructuring)
    //console.log("check props: " , props);
    
    //method 1: popular
    const{todoList, deleteTodo} = props;

    //method 2: beginner const variableName = props.key;
    //method 3: take directly {name} lazy

    const handleDelete = (id) => {
        deleteTodo(id);
    }
     return(
        <div className="d-flex flex-column justify-content-center text-center">
          {todoList.map((item, index) => {
            
            return (
              <div className={`todoDisplay`} key = {item.id}>
                <div>{item.name}</div>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </div>
            )
          })}
          
        </div>
    )
}

export default TodoDisplay;