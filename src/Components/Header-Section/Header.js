import React from "react";
import NoteModal from "./CreateNote/NoteModal";
import Button  from 'react-bootstrap/Button'
import './header_section.css'

const Header = ({show, handleShow, handleClose, notes, setNotes}) => {
    return(
        <div className="flex flex-column items-center">
            <h1 className="lh-title">TO-DO Board</h1>
            <Button className="btn btn-primary btn-create" onClick={handleShow}> Create Task </Button>
            <NoteModal show={show} handleShow={handleShow} handleClose={handleClose} notes={notes} setNotes={setNotes}/>
        </div>
    )
}

export default Header;