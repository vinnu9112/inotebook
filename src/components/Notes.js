import React, { useEffect } from 'react';
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Newsitem from "./Noteitem"

const Notes = () => {
    const context = useContext(NoteContext);
    const{notes, getNotes} = context;
    useEffect(()=>{
        getNotes();
    }, [])
  return (
    <div>
        <>
        <AddNote/>
       <div className="row my-3">
             <h1>Your Notes</h1>
             {notes.map((note)=>{
                return <Newsitem key={note._id} note={note}/> ;
                
             })}
        </div>
        </>
    </div>
  )
}

export default Notes
