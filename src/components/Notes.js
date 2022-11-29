import React from 'react';
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import Newsitem from "./Noteitem"

const Notes = () => {
    const context = useContext(NoteContext);
    const{notes, setNotes} = context;
  return (
    <div>
       <div className="row my-3">
             <h1>Your Notes</h1>
             {notes.map((note)=>{
                return <Newsitem note={note}/> ;
                
             })}
        </div>
    </div>
  )
}

export default Notes
