import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import CreateNote from "./CreateNote";

const NoteModal = ({show, handleClose, editShow, notes, setNotes}) => {
  
    return (
      <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <CreateNote  onHide = {handleClose} notes = {notes} setNotes = {setNotes}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default NoteModal;