import React from "react";
import DailyNote from "../TaskNote/DailyNote";

const NoteBoard = ({notes}) => {
    
    return (
        <div className="flex flex-wrap justify-around b--solid pa4 ma2">
            {notes.map ((item, index) =>  <DailyNote  key={index} singleNote={item}/>)}
        </div>
    )
}

export default NoteBoard;