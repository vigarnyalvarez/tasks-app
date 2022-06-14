import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import DailyNote from "../../TaskNote/DailyNote";

const UpdateNoteModal = ({show, handleClose, notes, setNotes, value}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <DailyNote singleNote={value}/>
        </Modal.Body>
      </Modal>
  </>
  )
}

export default UpdateNoteModal;