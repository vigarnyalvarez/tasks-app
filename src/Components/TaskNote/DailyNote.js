import React from "react";
import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";

const DailyNote = ({singleNote}) => {
    return (
        <div className="ba br4 b--dark-gray flex flex-column pa4 ma3 yellow bg-dark-gray shadow-5 overflow-hidden">
            <NoteHeader title={singleNote.title} date={singleNote.date} />
            <NoteList noteList={singleNote.tasks}/>
        </div>
    )
}

export default DailyNote;