import { INote } from "../types/INote";
import NoteMin from "./NoteMin";
import { BsFillArchiveFill, BsFillBackspaceFill } from "react-icons/bs";
import React, { MouseEventHandler } from "react";
import IsEmpty from "./IsEmpty";
import { useDispatch } from "react-redux";
import { notesActions } from "../store/notes.store";
import ConfirmModal from "../components/ConfirmModal";

type inputProps = {
  notes: Array<INote>;
  setEditingId?: (id: string) => void;
};

const NotesList = ({ notes, setEditingId }: inputProps) => {
  const dispatch = useDispatch();
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const handleDeleteAll: MouseEventHandler<HTMLDivElement> = () => {
    setShowConfirmModal(true);
  };
  const handleArchiveAll: MouseEventHandler<HTMLDivElement> = () => {
    notes.forEach((note) => dispatch(notesActions.changeState(note)));
  };
  const closeConfirm = () => {
    setShowConfirmModal(false);
  };
  const onConfirm = () => {
    notes.forEach((note) => dispatch(notesActions.deleteNote(note.id)));
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="max-h-256 overflow-y-auto container mx-auto">
        <table className="mx-auto w-full table-auto border-separate border-spacing-x-0 border-spacing-y-2">
          <thead className="table-header-group">
            <tr className="bg-gray-300 rounded">
              <th className="text-center w-14 h-14 rounded-l my-4"></th>
              <th className="text-left">Name</th>
              <th className="text-left">Created</th>
              <th className="text-left">Category</th>
              <th className="text-left">Content</th>
              <th className="text-left">Dates</th>
              <th className="text-right rounded-r">
                <BsFillArchiveFill
                  className="inline w-10 h-10 p-1 cursor-pointer"
                  onClick={handleArchiveAll}
                />
                <BsFillBackspaceFill
                  className="inline w-10 h-10 p-1 cursor-pointer"
                  onClick={handleDeleteAll}
                />
              </th>
            </tr>
          </thead>
          <tbody className="">
            {notes.length > 0 ? (
              notes.map((note) => (
                <NoteMin note={note} setEditingId={setEditingId} />
              ))
            ) : (
              <IsEmpty />
            )}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        message="It will delete all notes from this table"
        isShown={showConfirmModal}
        onClose={closeConfirm}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default NotesList;
