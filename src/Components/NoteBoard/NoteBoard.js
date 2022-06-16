import React from "react";
import DailyNote from "../TaskNote/DailyNote";

const NoteBoard = ({ notes, showEditModal, modifyAction }) => {
    
    
    
    return (
        <div className="flex flex-wrap justify-around b--solid pa4 ma2">
            {notes.map ((item, index) =>  <DailyNote  key={index} storedId={index} singleNote={item} displayEditableNote={showEditModal} modifyAction={modifyAction}/>)}
        </div>
    )
}

export default NoteBoard;