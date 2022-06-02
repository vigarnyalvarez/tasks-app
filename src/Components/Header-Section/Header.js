import React from "react";
import Button  from 'react-bootstrap/Button'
import './header_section.css'

const Header = ({handleShowModal}) => {
    return(
        <div className="flex flex-column items-center">
            <h1 className="lh-title">TO-DO Board</h1>
            <Button className="btn btn-primary btn-create" onClick={handleShowModal}> Create Task </Button>
        </div>
    )
}

export default Header;