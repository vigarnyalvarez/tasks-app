import React, {useState} from 'react';
import './App.css';
import NoteBoard from './Components/NoteBoard/NoteBoard';
import Header from './Components/Header-Section/Header';
import NoteModal from './Components/Modals/CreateNote/CreateNoteModal';
import UpdateNoteModal from './Components/Modals/UpdateNote/UpdateNoteModal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const [notes, setNotes] = useState(
  [
    {
      id: 1,
      date: 'Thu May 26 2022',
      title: 'Test',
      tasks: ['test 1', 'test 2', 'test 3']
    },
    {
      id: 2,
      date: 'Fri May 27 2022',
      title: 'Test',
      tasks: ['test 1', 'test 2', 'test 3']
    },
    {
      id: 3,
      date: 'Sat May 28 2022',
      title: 'Test',
      tasks: ['test 1', 'test 2', 'test 3']
    },
    {
      id: 4,
      date: 'Sun May 29 2022',
      title: 'Test',
      tasks: ['test 1', 'test 2', 'test 3']
    },
  
  ]

)


  //editableModal State
  const [showEditable, setShowEditable] = useState(false);
  //state that copies note to be modified on HANDLE_SHOW_EDIT_NOTEMODAL
  const [editableNote, setEditableNote] = useState({});

  //state and updates for creation Modal
  const [show, setShow] = useState(false);
  const handleCloseNoteModal = () => setShow(false);
  const handleShowNoteModal = () => setShow(true);

  //state update for modification modal + display of the note to be editted
  const HANDLE_CLOSE_EDIT_NOTEMODAL = () => setShowEditable(false);
  const HANDLE_SHOW_EDIT_NOTEMODAL = (id) => {
    setShowEditable(true);
    setEditableNote(notes.find(note => note.id === id))
  }

  
  
  

  return (
      <div className='flex flex-column items-center'>
        <Header handleShowNoteModal={handleShowNoteModal}  />
        <NoteModal show={show} handleShowNoteModal={handleShowNoteModal} handleCloseNoteModal={handleCloseNoteModal} notes={notes} setNotes={setNotes}/>
        <UpdateNoteModal show={showEditable} handleClose={HANDLE_CLOSE_EDIT_NOTEMODAL} notes={editableNote}/>
        <NoteBoard notes={notes} showEditModal={HANDLE_SHOW_EDIT_NOTEMODAL} />
      </div>
  );
}

export default App;
