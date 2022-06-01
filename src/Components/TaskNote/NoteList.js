import React from "react";
const   NoteList = ({noteList}) => {
    
    return (
        <ul>
            {noteList.map((note, id) => { 
                return <li key={id}>{note}</li>   
            })}
        </ul>
    )
}

export default NoteList;
