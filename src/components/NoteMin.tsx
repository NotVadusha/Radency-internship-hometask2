import { MouseEventHandler } from "react";
import { INote } from "../types/INote";
import { dateFormats } from "../utils/dateFormats";
import { BsArchive, BsBackspace, BsPencil } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineBulb } from "react-icons/ai";
import { LuBrainCog } from "react-icons/lu";
import { LiaQuoteRightSolid } from "react-icons/lia";
type inputProps = { note: INote };

const NoteMin = ({ note }: inputProps) => {
  const parseNoteDate = (content: string) => {
    // TODO - replace with model method
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
  const handleEdit: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("edit note", e);
  };
  const handleChangeState: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("archive note", e);
  };
  const handleDelete: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("delete note", e);
  };
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
      <td>{note.name}</td>
      <td>{note.createDate.toLocaleDateString("en-GB")}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{parseNoteDate(note.content ?? "")}</td>
      <td className="text-end rounded-r">
        {!note.is_archived && (
          <BsPencil className="inline w-10 h-10 p-1" onClick={handleEdit} />
        )}
        <BsArchive
          className="inline w-10 h-10 p-1"
          onClick={handleChangeState}
        />
        <BsBackspace className="inline w-10 h-10 p-1" onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default NoteMin;
