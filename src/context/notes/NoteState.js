import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
const notesInitial = [
    {
      "_id": "63845a6881e8da4883759454",
      "user": "638378e23240bee6961686bf",
      "title": "My title",
      "description": "wake up reminder",
      "tag": "personal",
      "date": "2022-11-28T06:51:20.704Z",
      "__v": 0
    },
    {
      "_id": "63845a9081e8da4883759456",
      "user": "638378e23240bee6961686bf",
      "title": "My title",
      "description": "wake up reminder",
      "tag": "personal",
      "date": "2022-11-28T06:52:00.911Z",
      "__v": 0
    },
    {
      "_id": "63845b8ea81bdaa01850852e",
      "user": "638378e23240bee6961686bf",
      "title": "My title",
      "description": "wake up reminder",
      "tag": "personal",
      "date": "2022-11-28T06:56:14.726Z",
      "__v": 0
    },
    {
      "_id": "63845be82ef9fac898de3a88",
      "user": "638378e23240bee6961686bf",
      "title": "My title",
      "description": "wake up reminder",
      "tag": "personal",
      "date": "2022-11-28T06:57:44.298Z",
      "__v": 0
    },
    {
      "_id": "63845be82ef9fac898de3a88",
      "user": "638378e23240bee6961686bf",
      "title": "My title",
      "description": "wake up reminder",
      "tag": "personal",
      "date": "2022-11-28T06:57:44.298Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial);

    return(
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;