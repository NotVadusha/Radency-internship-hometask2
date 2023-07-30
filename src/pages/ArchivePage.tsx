import { Link } from "react-router-dom";
import NotesList from "../components/NotesList";
import { useSelector } from "react-redux";
import { INote } from "../types/INote";
import { RootState } from "../store/store";

function ArchivePage() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div className="py-16 h-screen mx-auto">
      <div className="container mx-auto">
        <Link
          className="px-6 py-2 block w-fit text-xl font-semibold bg-gray-300 rounded"
          to={"/"}
        >
          Go back
        </Link>
      </div>
      <NotesList notes={notes.filter((note: INote) => note.is_archived)} />
    </div>
  );
}

export default ArchivePage;
