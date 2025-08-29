import { useState } from 'react';
import './modal.scss';

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

    const [ selectedStatus, setStatus ] = useState('Select Option');
    const status = ['In-Progress', 'Yet To Start'];
    function updateStatus(data){
        setStatus(data);
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
                </div>

            <div className="add-todo-body">
                <form>
                    <div class="mb-3">
                        <label htmlFor="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" placeholder='Enter Title here...' required/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="description" class="form-label">Description</label>
                        <input type="text" class="form-control" id="description" placeholder='Enter Description here...' required/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="yettostart" class="form-label">Status</label>
                        <div class="dropdown">
                            <div class="status-dropdown dropdown-toggle form-control" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                { selectedStatus }
                            </div>
                            <ul class="dropdown-menu status-dropdown">
                                {
                                    status.map((s)=> (
                                        <li onClick={ ()=> updateStatus(s) }><a class="dropdown-item">{ s }</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Mark as important</label>
                    </div>
                </form>
            </div>

                <div className="save-btn d-flex gap-2">
                    <button className="btn btn-success" onClick={ startModal }>Save</button>
                </div>
        </div>
    )
}

// export default Modal;