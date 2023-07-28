import { MouseEventHandler } from "react";

interface InputProps {
  body_msg: string;
  is_shown: boolean;
  setShowModal: (params: boolean) => void;
  action: () => void;
}

function ConfirmModal({
  body_msg,
  is_shown,
  setShowModal,
  action,
}: InputProps) {
  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    setShowModal(true);
    document.getElementById("confirmModal")?.classList.remove("scale-100");
    document.getElementById("confirmModal")?.classList.add("scale-0");
  };
  if (!is_shown) return null;
  return (
    <div
      className="absolute scale-0 transition-transform w-96 inset-x-2/4 -translate-x-1/2 transform top-12 bg-white rounded-md shadow-xl shadow-gray-700/25"
      id="confirmModal"
    >
      <div className="bg-green-200 rounded-t-md border-gray-500  border-b px-4 py-2 font-semibold text-2xl">
        Are you sure?
      </div>
      <div className="px-4 py-6 text-lg  border-gray-500 border-b">
        {body_msg}
      </div>
      <div className="w-fit ml-auto px-4 py-2">
        <button
          className="py-1 px-4 inline-block ml-auto "
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="py-1 px-4 inline-block bg-green-300/50 rounded"
          onClick={(e) => {
            action();
            closeModal(e);
          }}
        >
          Yes, i'm sure!
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
