import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const { note, updateNote } = props;
    const context = useContext(NoteContext);
    const{deleteNote} = context;

    const handleClick = ()=>{
        deleteNote(note._id);
        props.showAlert("Note Deleted Succesfully", "success");
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-trash-alt mx-2" onClick={handleClick}></i>
                    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
