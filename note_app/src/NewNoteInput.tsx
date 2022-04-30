import React, { ChangeEvent, useState } from "react";
interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setnote] = useState("");
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setnote(event.target.value);
  };
  const onAddNoteClick = () => {
    addNote(note);
    setnote("");
  };
  return (
    <div>
      <input
        type={"text"}
        name="note"
        placeholder="Note"
        onChange={updateNote}
      />
      <button onClick={onAddNoteClick}>add note</button>
    </div>
  );
};
