import React, {setState} from "react";
import DailyNote from "../TaskNote/DailyNote";

const NoteBoard = ({notes}) => {
    
    const displayEditableNote = (id) => {console.log(notes[id-1])}
    
    return (
        <div className="flex flex-wrap justify-around b--solid pa4 ma2">
            {notes.map ((item, index) =>  <DailyNote  key={index} singleNote={item} displayNote={displayEditableNote} />)}
        </div>
    )
}

export default NoteBoard;