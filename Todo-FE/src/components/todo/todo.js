import './todo.scss';

import { useState } from 'react';

import { GrInProgress } from "react-icons/gr";
import { FaCircleCheck } from "react-icons/fa6";
import { TbLabelImportant } from "react-icons/tb";
import { TbLabelImportantFilled } from "react-icons/tb";
import { Modal } from "../modal/modal"
import Backdrop from '../backdrop/backdrop';

function Todo(props){

    let [ isImportant, markAsImportant ] = useState(props.todo.isImportant);
    const [ currentState, setState ] = useState(false);

    function markAsImp(){
        isImportant = !isImportant
        markAsImportant(isImportant);
    }

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

    function closeModal() {
        setState(false);
    }

    function startModal() {
        setState(true)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">
                <div className="todo-title-header">
                    { !isImportant && <TbLabelImportant size={40} color="grey" className="me-2 cross-btn" onClick={markAsImp} />}
                    { isImportant && <TbLabelImportantFilled size={40} color="yellow" className="me-2 cross-btn" onClick={markAsImp} />}
                    <h2>{props.todo.title}</h2>
                </div>
                { (props.todo.status == 'inprogress' || props.todo.status == 'yettostart') && <GrInProgress size={30} color={statusColor(props.todo.status)}/> }
                { props.todo.status == 'completed' && <FaCircleCheck size={30} color={statusColor(props.todo.status)}/> }
                
            </div>

            <div className="todo-body">
                <p>{ props.todo.description }</p>
            </div>

            <div className="btns">
                <button className="btn btn-outline-primary" disabled={props.todo.status == 'completed'}>Update Todo</button>
                <button className="btn btn-danger" onClick={ startModal } disabled={props.todo.status == 'completed'}>Delete Todo</button>
            </div>  

            {/* Modal */}
            { currentState && <Modal onCancel={ closeModal } /> }
            { currentState && <Backdrop onCancel={ closeModal }/> }
        </div>
    )
}

export default Todo;