import NotesList from "../components/NotesList";
import StatsTable from "../components/StatsTable";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import getStats from "../utils/getStats";
import React from "react";
import NoteForm from "../components/Form";
import ErrorModal from "../components/ErrorModal";

function MainPage() {
  const notes = useSelector((state: RootState) => state.notes.notes);
  console.log(notes);

  const [showErrModal, setShowErrModal] = React.useState(false);
  const [errorMessage, _setErrorMessage] = React.useState("");
  const setErrorMessage = (msg: string) => {
    _setErrorMessage(msg);
    setShowErrModal(true);
  };
  const [showForm, setShowForm] = React.useState(false);
  const [noteId, _setNoteId] = React.useState("");
  const setNoteId = (id: string) => {
    setShowForm(true);
    _setNoteId(id);
  };
  const handleCreateClick = () => setShowForm(true);
  const handleCloseForm = () => {
    setNoteId("");
    setShowForm(false);
  };

  const handleErrorClose = () => setShowErrModal(false);
  return (
    <>
      <NotesList
        notes={notes.filter((note) => !note.is_archived)}
        setEditingId={setNoteId}
      />
      <div className="mx-auto w-fit container">
        <Link
          className="my-2 mx-4 px-6 py-2 text-xl font-semibold inline bg-gray-300 rounded"
          to="/archive"
        >
          Check archive
        </Link>
        <button
          className="my-2 px-6 py-2 text-xl font-semibold inline bg-gray-300 rounded"
          onClick={handleCreateClick}
        >
          Create note
        </button>
      </div>
      <StatsTable stats={getStats(notes)} />
      <NoteForm
        isShown={showForm}
        onClose={handleCloseForm}
        setError={setErrorMessage}
        noteId={noteId}
        notes={notes}
      ></NoteForm>
      <ErrorModal
        err_msg={errorMessage}
        isShown={showErrModal}
        onClose={handleErrorClose}
      ></ErrorModal>
    </>
  );
}

export default MainPage;
