import { useState } from 'react';
import './modal.scss';

import { MdOutlineCancel } from "react-icons/md";
import { TbLabelImportant } from "react-icons/tb";
import { TbLabelImportantFilled } from "react-icons/tb";

export function Modal(props) {
    function closeModal(){
        props.onCancel()
    }

    function startModal(){
        console.log('modal has complete its work')
        props.onCancel();
    }
    return (
        <div className="custom-modal" >
                <div className="message">
                    <h3>Are you sure ?</h3>
                </div>

                <div className="btns d-flex gap-2">
                    <button className="btn btn-outline-danger" onClick={ closeModal }>Cancel</button>
                    <button className="btn btn-danger" onClick={ startModal }>Confirm</button>
                </div>
        </div>
    )
}

export function AddModal(props){

    let [ isFavourite, markAsFavourite ] = useState(false);

    function markAsFav(){
        isFavourite = !isFavourite
        markAsFavourite(isFavourite);
    }

    function closeModal(){
        props.onCancel()
    }

    function startModal(){
        console.log('modal has complete its work')
        props.onCancel();
    }
    return (
        <div className="custom-modal" >
                <div className="add-header">
                    <h3>Add a new Todo</h3>
                    { isFavourite && <TbLabelImportant size={40} color="grey" className="me-2 cross-btn" onClick={ markAsFav }/> }
                    { !isFavourite && <TbLabelImportantFilled size={40} color="yellow" className="me-2 cross-btn" onClick={ markAsFav }/>     }
                </div>

                <div className="save-btn d-flex gap-2">
                    <button className="btn btn-success" onClick={ startModal }>Save</button>
                </div>
        </div>
    )
}

// export default Modal;