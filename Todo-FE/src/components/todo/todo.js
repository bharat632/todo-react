import './todo.scss';

function Todo(props){
    function startModal(){
        props.onDelete();
    }
    return (
        <div className="todo-container">
            <div className="todo-title">
                <h2>{ props.title }</h2>
            </div>

            <div className="todo-body">
                <p>{ props.description }</p>
            </div>

            <div className="btns">
                <button className="btn btn-outline-primary">Update Todo</button>
                <button className="btn btn-danger" onClick={ startModal }>Delete Todo</button>
            </div>  
        </div>
    )
}

export default Todo;