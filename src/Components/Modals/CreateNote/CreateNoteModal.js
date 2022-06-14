import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import CreateNote from "./CreateNote";

const CreateNoteModal = ({show, handleCloseNoteModal, notes, setNotes}) => {
    
    return (
      <Modal show={show} onHide={handleCloseNoteModal} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CreateNote  onHide={handleCloseNoteModal} notes={notes} setNotes={setNotes}/>
        </Modal.Body>
      </Modal>
      );
    }


  export default CreateNoteModal;