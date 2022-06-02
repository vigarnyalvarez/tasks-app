import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button  from 'react-bootstrap/Button'
import CreateNote from "./CreateNote";

const NoteModal = ({notes, setNotes}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
      setShow(true);
    }
  
    return (
      <>
        <Button onClick={handleShow}>
          Create Task
        </Button>
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