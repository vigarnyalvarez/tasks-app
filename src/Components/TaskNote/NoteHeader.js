import React from "react";

const NoteHeader = ({date, title}) => {
    return(
        <div className="tc">
            <h1>{date}</h1>
            <h1>{title}</h1>
        </div>
    )
}

export default NoteHeader