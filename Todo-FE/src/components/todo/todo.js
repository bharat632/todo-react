import './todo.scss';

import { GrInProgress } from "react-icons/gr";
import { FaCircleCheck } from "react-icons/fa6";

function Todo(props){

    function statusColor(status){
        switch(status){
            case "inprogress": 
                return "orange";
            case "completed":
                return "green";
            case "yettostart":
                return "red";
            default: 
                return "grey";
        }    
    }


    function startModal(){
        props.onDelete();
    }

    return (
        <div className="todo-container">
            <div className="todo-title">
                <h2>{ props.todo.title }</h2>
                { (props.todo.status == 'inprogress' || props.todo.status == 'yettostart') && <GrInProgress size={30} color={statusColor(props.todo.status)}/> }
                { props.todo.status == 'completed' && <FaCircleCheck size={30} color={statusColor(props.todo.status)}/> }
                
            </div>

            <div className="todo-body">
                <p>{ props.todo.description }</p>
            </div>

            <div className="btns">
                <button className="btn btn-outline-primary" disabled={props.status == 'completed'}>Update Todo</button>
                <button className="btn btn-danger" onClick={ startModal } disabled={props.status == 'completed'}>Delete Todo</button>
            </div>  
        </div>
    )
}

export default Todo;