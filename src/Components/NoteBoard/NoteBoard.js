import React from "react";
import DailyNote from "../TaskNote/DailyNote";

const NoteBoard = ({notes}) => {
    return (
        <div className="flex flex-wrap items-center b--solid pa4 ma2">
            
            {notes.map ((item, index) =>  <DailyNote id={index} singleNote={item}/>)}
        </div>
    )
}

export default NoteBoard;