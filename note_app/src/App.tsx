import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { store } from "./app/store";
import { useDispatch, useSelector } from "react-redux";
import { NotesState } from "./noteReducer";
function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => {
    return state.notes;
  });

  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };
  return (
    <>
      <NewNoteInput addNote={addNote}></NewNoteInput>
      <hr></hr>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
