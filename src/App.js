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
  const [show, setShow] = useState(false);

  //editableModal State
  const [showEditable, setShowEditable] = useState(false);
  //id state variable to display note
  const [noteId, setNoteId] = useState(0)
  //state updates for creation Modal
  const handleCloseNoteModal = () => setShow(false);
  const handleShowNoteModal = () => setShow(true);

  //state update for modification modal + display of the note to be editted
  const HANDLE_CLOSE_EDIT_NOTEMODAL = () => setShowEditable(false);
  const HANDLE_SHOW_EDIT_NOTEMODAL = (id) => {
    setShowEditable(true);
    setNoteId(id-1)
  }
  
  

  return (
      <div className='flex flex-column items-center'>
        <Header handleShowNoteModal={handleShowNoteModal}  />
        <NoteModal show={show} handleShowNoteModal={handleShowNoteModal} handleCloseNoteModal={handleCloseNoteModal} notes={notes} setNotes={setNotes}/>
        <UpdateNoteModal show={showEditable} handleClose={HANDLE_CLOSE_EDIT_NOTEMODAL} value={notes[noteId]}/>
        <NoteBoard notes={notes} showEditModal={HANDLE_SHOW_EDIT_NOTEMODAL} />
      </div>
  );
}

export default App;
