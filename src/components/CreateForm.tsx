import Modal from "./Modal.tsx";
import categories from "../utils/categories.ts";
import { useDispatch } from "react-redux";
import { notesActions } from "../store/notes.store.ts";

interface InputProps {
  onClose: () => void;
  isShown: boolean;
  setError: (msg: string) => void;
}
const CreateForm = ({ onClose, isShown, setError }: InputProps) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const form = document.getElementById("notesForm");
    if (!form) return;

    const name = form.querySelector("#nameInput") as HTMLInputElement;
    const content = form.querySelector("#contentInput") as HTMLInputElement;
    const category = form.querySelector(
      "#categoriesSelect"
    ) as HTMLInputElement;

    const noteInfo = {
      name: name.value,
      content: content.value,
      category: category.value,
    };

    !noteInfo.name && setError("Input name!");
    if (noteInfo.name) {
      dispatch(notesActions.addNote(noteInfo));
      name.value = "";
      content.value = "";
      category.value = categories[0];
      onClose();
    }
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Modal onClose={onClose} isShown={isShown}>
      <div>
        <h1 className="text-3xl text-center mb-4">Create new note</h1>
        <form id="notesForm">
          <div className="flex flex-row gap-2">
            <input
              className="form-input rounded basis-3/4"
              id="nameInput"
              placeholder="Enter note name"
            ></input>
            <select
              className="form-select rounded basis-1/4"
              id="categoriesSelect"
            >
              {categories.map((category) => (
                <option>{category}</option>
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
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="py-2 px-6 text-xl bg-gray-400 rounded mx-4"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateForm;
