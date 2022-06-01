import React from "react";
import NoteModal from "./CreateNote/NoteModal";
import './header_section.css'

const Header = ({notes, setNotes}) => {
    return(
        <div className="flex flex-column items-center">
            <h1 className="lh-title">TO-DO Board</h1>
            <NoteModal notes={notes} setNotes={setNotes}/>
        </div>
    )
}

export default Header;