import React from "react";
import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";

const DailyNote = ({id, singleNote}) => {
    return (
        <div key={id} className="ba br4 b--dark-gray items-center pa4 ma3 yellow bg-dark-gray shadow-5 overflow-hidden">
            <NoteHeader title={singleNote.title} date={singleNote.date} />
            <NoteList noteList={singleNote.tasks}/>
        </div>
    )
}

export default DailyNote;