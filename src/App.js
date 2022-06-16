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

  //state that copies note to be modified on handleShowEditNoteModalL
  const [displayNote, setDisplayNote] = useState({});

  //state and updates for creation Modal
  const [show, setShow] = useState(false);
  const handleCloseNoteModal = () => {
    setShow(false);
    setModifyAction(false)
  }
  const handleShowNoteModal = () => {
    setShow(true);
    setModifyAction(true)
  }

  const [modifyAction, setModifyAction] = useState(false);

  //state update for modification modal + display of the note to be editted
  const handleCloseEditNoteModal = () => {
    setShowEditable(false);
    setModifyAction(false);
  }

  const handleShowEditNoteModal = (id) => {
    setShowEditable(true);
    setModifyAction(true)
    setDisplayNote(notes.find( note => note.id === id ))
  }
  
  /**
   * Function to edit existing note. It copies the notes array, modifies using a splice and the index found
   * and uses notes setState to modify the whole notes state.
   */
  const editNote = (values) => {
    let editableArray = [...notes];
    let index = editableArray.findIndex(note => note.id === values.id);
    editableArray.splice(index, 1, values);
    setNotes(editableArray);
    console.log(editableArray);
  }

  const deleteNote = (id) => {
    let editableArray = [...notes];
    const index = editableArray.findIndex(note => note.id === id);
    console.log(index)
    if(index || index === 0){
      editableArray.splice(index, 1);
      setNotes(editableArray);
      console.log(editableArray);
      handleCloseEditNoteModal();
    }
  }

  return (
      <div className='flex flex-column items-center'>
        <Header handleShowNoteModal={handleShowNoteModal}  />
        <NoteModal show={show} handleShowNoteModal={handleShowNoteModal} handleCloseNoteModal={handleCloseNoteModal} notes={notes} setNotes={setNotes} modifyAction={modifyAction}/>
        <UpdateNoteModal show={showEditable} handleClose={handleCloseEditNoteModal} notes={displayNote} modifyAction={modifyAction} modifyFunc={editNote} deleteFunc={deleteNote}/>
        <NoteBoard notes={notes} showEditModal={handleShowEditNoteModal} />
      </div>
  );
}

export default App;
