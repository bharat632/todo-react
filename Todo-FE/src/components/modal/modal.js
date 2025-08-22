import './modal.scss';

function Modal(props) {
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

export default Modal;