import React, {useState} from 'react';
import './App.css';
import NoteBoard from './Components/NoteBoard/NoteBoard';
import Header from './Components/Header-Section/Header';
import NoteModal from './Components/Modals/CreateNote/CreateNoteModal';
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

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true)
  

  return (
      <div className='flex flex-column items-center'>
        <Header handleShowModal={handleShowModal}  />
        <NoteModal show={show} handleShow={handleShowModal} handleClose={handleCloseModal} notes={notes} setNotes={setNotes}/>
        <NoteBoard show={show} handleShow={handleShowModal} handleClose={handleCloseModal} notes={notes} />
      </div>
  );
}

export default App;
