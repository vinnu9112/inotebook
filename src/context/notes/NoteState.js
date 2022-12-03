import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
const notesInitial = [
   
  ]
  const userInitial = []

  const [notes, setNotes] = useState(notesInitial);
  const [user, setUser] = useState(userInitial);
  
  const getUser = async ()=>{
    //API call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json(); 
    setUser(json);
    
  }
  const getNotes = async ()=>{
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json(); 
    setNotes(json);
    
  }
  const addNote = async (title, description, tag) => {
    //Remember the restrictions set while adding note
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json(); 
    setNotes(notes.concat(note))
  }
  
  const deleteNote = async (id)=>{
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json(); 
    console.log(json)


    //Delete a note;
    const newsNotes = notes.filter((note)=>{
      return note._id !== id;
    })
    setNotes(newsNotes);
  }
  
  
  //Edit a note
  const editNote = async (id, title, description, tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title, description, tag})  
    });
    const json = await response.json(); 
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client 
      for (let index = 0; index < notes.length; index++) {
        const element = newNotes[index];
        if(element._id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
  }
  
    return(
        <NoteContext.Provider value = {{notes, user, addNote, deleteNote, editNote, getNotes, getUser}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;