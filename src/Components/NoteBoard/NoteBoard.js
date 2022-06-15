import React, {setState} from "react";
import DailyNote from "../TaskNote/DailyNote";

const NoteBoard = ({notes, showEditModal}) => {
    
    
    
    return (
        <div className="flex flex-wrap justify-around b--solid pa4 ma2">
            {notes.map ((item, index) =>  <DailyNote  key={index} singleNote={item} displayEditableNote={showEditModal} />)}
        </div>
    )
}

export default NoteBoard;