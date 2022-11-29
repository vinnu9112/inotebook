import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
const notesInitial = [
   
  ]

  const [notes, setNotes] = useState(notesInitial);
  
  const getNotes = async ()=>{
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Mzc4ZTIzMjQwYmVlNjk2MTY4NmJmIn0sImlhdCI6MTY2OTYxNTE1MX0.fSVRFEDKFVKbdbryBZqcxcwpTuXR4igrMKUwvSKdG7Y'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json(); 
    console.log(json);
    setNotes(json);
    
  }
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Mzc4ZTIzMjQwYmVlNjk2MTY4NmJmIn0sImlhdCI6MTY2OTYxNTE1MX0.fSVRFEDKFVKbdbryBZqcxcwpTuXR4igrMKUwvSKdG7Y"
      },
      body: JSON.stringify({title, description, tag})
    });
     

    console.log("Adding a new note")
    const note = {
      "_id": "63845be82ef9fac898de3a889",
      "user": "638378e23240bee6961686bf",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-11-28T06:57:44.298Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  
  const deleteNote = async (id)=>{
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Mzc4ZTIzMjQwYmVlNjk2MTY4NmJmIn0sImlhdCI6MTY2OTYxNTE1MX0.fSVRFEDKFVKbdbryBZqcxcwpTuXR4igrMKUwvSKdG7Y'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json(); 
    console.log(json);


    //Delete a note
    console.log("deleting the note with id"+ id);
    const newsNotes = notes.filter((note)=>{
      return note._id !== id;
    })
    setNotes(newsNotes);
  }
  
  
  //Edit a note
  const editNote = async (id, title, description, tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Mzc4ZTIzMjQwYmVlNjk2MTY4NmJmIn0sImlhdCI6MTY2OTYxNTE1MX0.fSVRFEDKFVKbdbryBZqcxcwpTuXR4igrMKUwvSKdG7Y'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title, description, tag})  
    });
    const json = await response.json(); 
    console.log(json);


    //logic to edit in client 
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
  }
  
    return(
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;