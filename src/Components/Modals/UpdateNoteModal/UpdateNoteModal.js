import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

const UpdateNoteModal = ({show, handleClose, notes, setNotes}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
      </Modal>
  </>
  )
}

export default UpdateNoteModal;