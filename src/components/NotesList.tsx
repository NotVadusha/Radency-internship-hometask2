import { INote } from "../types/INote";
import NoteMin from "./NoteMin";
import { BsFillArchiveFill, BsFillBackspaceFill } from "react-icons/bs";
import { MouseEventHandler } from 'react'
type inputProps = {notes: Array<INote>}

const NotesList = ({notes}:inputProps) => {
    const handleDeleteAll:MouseEventHandler<HTMLDivElement> = (e) => {
        console.log("Delete all", e)
    }
    const handleArchiveAll:MouseEventHandler<HTMLDivElement> = (e) => {
        console.log("Archive all", e)
    }
    return (
        <table className="mx-auto container overflow-scroll table-auto border-separate border-spacing-x-0 border-spacing-y-2">
            <thead className="table-header-group">
                <tr className="bg-gray-300 rounded">
                    <th className="text-center w-14 h-14 rounded-l my-4"></th>
                    <th className="text-left">Name</th>
                    <th className="text-left">Created</th>
                    <th className="text-left">Category</th>
                    <th className="text-left">Content</th>
                    <th className="text-left">Dates</th>
                    <th className="text-right rounded-r">
                        <BsFillArchiveFill className="inline w-10 h-10 p-1" onClick={handleArchiveAll}/>
                        <BsFillBackspaceFill className="inline w-10 h-10 p-1" onClick={handleDeleteAll} />
                    </th>
                </tr>
            </thead>
            <tbody className="" >
                {notes.map((note)=><NoteMin note={note} /> 
                )}
            </tbody>

        </table>
    )
}

export default NotesList;