import React from "react";
import DailyNote from "../../TaskNote/DailyNote";
import { Formik, Form, Field, FieldArray } from 'formik';
import Button  from 'react-bootstrap/Button'

const CreateNote = ({onHide, notes, setNotes}) => {
    const createDate= new Date()
    const noteDraft = {
        id: notes.length+1,
        title: '', 
        date: createDate.toDateString(), 
        tasks: []
    }
      return (
            <Formik initialValues={noteDraft} onSubmit={(values) => {setNotes([...notes, values]); console.log(notes)}}>
            {({ handleSubmit, values, handleChange}) => (
                <div className="flex justify-around">
                    <Form onSubmit={handleSubmit}>
                        <div className="flex flex-column">
                            <label htmlFor="title" className="pr3">Title</label>
                            <Field id="title" name = "title" type="text" onChange={handleChange} value={values.title}/>
                        </div>
                        <br/>
                        <label htmlFor="task" className="mr2">Add a Task</label>
                        <FieldArray name="tasks" >
                            {({remove, push}) => (
                                <>
                                    {values.tasks.map((task, index) => (
                                       
                                        <div key={index} className="flex justify-around mb3">
                                            <Field className="mr2" name={`tasks.${index}`} placeholder="Enter Task"/>
                                            <Button type="button" className="secondary" variant="danger" onClick={() => remove(index)}>Remove</Button>
                                        </div>
                                     
                                    ))}
                                    <Button type="button" className="secondary mr4" variant="success" onClick={() => push('')}> Add Task</Button>
                                </>
                            )}
                        </FieldArray>
                        <Button type="submit" className="secondary" onClick={onHide}>Create Note</Button>
                    </Form>
                    <DailyNote singleNote={values}/>
                </div>
            )}
            </Formik>
      );
}

export default CreateNote;

