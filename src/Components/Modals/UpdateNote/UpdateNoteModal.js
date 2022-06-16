import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import UpdateNote from "./UpdateNote";

const UpdateNoteModal = ({ show, handleClose, notes, setNotes, modifyAction, modifyFunc }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UpdateNote notes={notes} setNotes={setNotes} onHide={handleClose} modifyAction={modifyAction} modifyFunc={modifyFunc} /> 
        </Modal.Body>
      </Modal>
  </>
  )
}

export default UpdateNoteModal;