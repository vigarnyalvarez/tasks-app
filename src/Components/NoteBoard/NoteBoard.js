import React, {useState} from "react";
import DailyNote from "../TaskNote/DailyNote";
import NoteModal from "../Header-Section/CreateNote/NoteModal";

const NoteBoard = ({notes}) => {
    const [editNote, setEditNote] = useState(false)
    
    return (
        <div className="flex flex-wrap justify-around b--solid pa4 ma2">
            {notes.map ((item, index) =>  <DailyNote  key={index} singleNote={item}/>)}
        </div>
    )
}

export default NoteBoard;