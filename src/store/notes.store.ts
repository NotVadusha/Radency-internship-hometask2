import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../types/INote";
import defaultNotes from "../utils/notes";

localStorage.setItem("note", JSON.stringify(defaultNotes));

const initialState: {
  notes: Array<INote>;
} = {
  notes: defaultNotes,
};
const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote(state, action) {
      const newNote: INote = {
        id: self.crypto.randomUUID(),
        ...action.payload,
        createDate: new Date(),
        is_archived: false,
      };
      state.notes = [...state.notes, newNote];
    },
    editNote(state, action) {
      console.log(action.payload, state.notes);
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    deleteNote(state, action) {
      const newNotes = state.notes.filter((note) => note.id !== action.payload);
      state.notes = newNotes;
    },
    changeState(state, action: PayloadAction<INote>) {
      const newNote = action.payload;
      const noteToChange = state.notes.find((note) => note.id === newNote.id);
      if (!noteToChange) return;
      const noteIndex = state.notes.indexOf(noteToChange);
      const changedNote = {
        ...newNote,
        is_archived: newNote.is_archived ? false : true,
      };
      state.notes[noteIndex] = changedNote;
    },
  },
});
export const notesActions = notesSlice.actions;

export default notesSlice.reducer;
