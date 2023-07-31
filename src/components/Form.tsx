import { INote } from "../types/INote.ts";
import CreateForm from "./CreateForm.tsx";
import EditForm from "./EditForm.tsx";

interface InputProps {
  onClose: () => void;
  isShown: boolean;
  setError: (msg: string) => void;
  noteId?: string;
  notes: Array<INote>;
}
const NoteForm = ({
  onClose,
  isShown,
  setError,
  noteId,
  notes,
}: InputProps) => {
  const note = notes.find((note) => note.id === noteId);

  return note ? (
    <EditForm
      onClose={onClose}
      isShown={isShown}
      setError={setError}
      note={note}
    />
  ) : (
    <CreateForm onClose={onClose} isShown={isShown} setError={setError} />
  );
};

export default NoteForm;
