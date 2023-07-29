import Modal from "./Modal.tsx";
interface InputProps {
  onClose: () => void;
  onSubmit: () => void;
  isShown: boolean;
  noteId?: string;
}
const NoteForm = ({ onClose, onSubmit, isShown, noteId }: InputProps) => {
  const options: Array<string> = ["Task", "Thoughts", "Idea", "Quote"];
  return (
    <Modal onClose={onClose} isShown={isShown}>
      <div>
        <h1 className="text-3xl text-center mb-4">
          {noteId ? "Editing note" : "Create new note"}
        </h1>
        <form className="">
          <div className="flex flex-row gap-2">
            <input
              className="form-input rounded basis-3/4"
              id="nameInput"
              placeholder="Enter note name"
            />
            <select
              className="form-select rounded basis-1/4"
              id="categoriesSelect"
            >
              {options.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </div>

          <textarea
            className="form-textarea my-4 w-full h-24 max-h-80 rounded bg-slate-200 border border-black"
            id="contentInput"
            placeholder="Enter note content"
          ></textarea>
        </form>
        <div className="w-fit mx-auto mt-8">
          <button
            className="py-2 px-6 text-xl bg-green-700/50 rounded mx-4"
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            className="py-2 px-6 text-xl bg-gray-400 rounded mx-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NoteForm;
