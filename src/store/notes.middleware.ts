import { MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { notesActions } from "./notes.store";
const notesMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const nextAction = next(action);
    nextAction.type;
    const notes = store.getState().notes.notes;

    if (notesActions.editNote.match(action)) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
    if (notesActions.deleteNote.match(action)) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
    if (notesActions.changeState.match(action)) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
    if (notesActions.addNote.match(action)) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };
export default notesMiddleware;
