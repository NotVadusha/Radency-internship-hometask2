import { MouseEventHandler } from "react";
import { INote } from "../types/INote";
import { dateFormats } from "../utils/dateFormats";
import { BsArchive, BsBackspace, BsPencil } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineBulb } from "react-icons/ai";
import { LuBrainCog } from "react-icons/lu";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { notesActions } from "../store/notes.store";
type inputProps = { note: INote; setEditingId?: (id: string) => void };

const parseNoteDate = (content: string) => {
  if (!content) return "";
  const dates: Array<string> = [];
  const match = content.match(dateFormats);
  match?.forEach((date) => {
    let formattedDate = date.replaceAll("-", "/");
    formattedDate = date.replaceAll(".", "/");
    dates.push(formattedDate);
  });
  return dates.toString();
};

const NoteMin = ({ note, setEditingId }: inputProps) => {
  const dispatch = useDispatch();
  const handleEdit: MouseEventHandler<HTMLDivElement> = () => {
    setEditingId!(note.id);
  };
  const handleChangeState: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(notesActions.changeState(note));
  };
  const handleDelete: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(notesActions.deleteNote(note.id));
  };
  const dates = parseNoteDate(note.content);
  return (
    <tr className="bg-blue-200 rounded">
      <th className="text-center h-14 rounded-l">
        <div className="bg-gray-200 h-12 w-12 mx-auto rounded-full">
          {note.category === "Task" && (
            <AiOutlineShoppingCart className="w-10 h-10 mx-auto inline my-1" />
          )}
          {note.category === "Thoughts" && (
            <LuBrainCog className="w-10 h-10 mx-auto inline my-1" />
          )}
          {note.category === "Idea" && (
            <AiOutlineBulb className="w-10 h-10 mx-auto inline my-1" />
          )}
          {note.category === "Quote" && (
            <LiaQuoteRightSolid className="w-10 h-10 mx-auto inline my-1" />
          )}
        </div>
      </th>
      <td>
        {note.name.length > 20 ? note.name.substring(0, 20) + "..." : note.name}
      </td>
      <td>{new Date(note.createDate).toLocaleDateString("en-GB")}</td>
      <td>{note.category}</td>
      <td>
        {note.content.length > 25
          ? note.content.substring(0, 25) + "..."
          : note.content}
      </td>
      <td>{dates.length > 20 ? dates.substring(0, 20) + "..." : dates}</td>
      <td className="text-end rounded-r">
        {!note.is_archived && (
          <BsPencil
            className="inline w-10 h-10 p-1 cursor-pointer"
            onClick={handleEdit}
          />
        )}
        <BsArchive
          className="inline w-10 h-10 p-1 cursor-pointer"
          onClick={handleChangeState}
        />
        <BsBackspace
          className="inline w-10 h-10 p-1 cursor-pointer"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};

export default NoteMin;
