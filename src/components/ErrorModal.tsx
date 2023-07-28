import { MouseEventHandler } from "react";

interface InputProps {
  err_msg: string;
  is_shown: boolean;
  setShowModal: (params: boolean) => void;
}

function ErrorModal({ err_msg, is_shown, setShowModal }: InputProps) {
  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    setShowModal(true);
    document.getElementById("errorModal")?.classList.remove("scale-100");
    document.getElementById("errorModal")?.classList.add("scale-0");
  };
  if (!is_shown) return null;
  return (
    <div
      className="absolute scale-0 transition-transform w-96 inset-x-2/4 -translate-x-1/2 transform top-12 bg-white rounded-md shadow-xl shadow-gray-700/25"
      id="errorModal"
    >
      <div className="bg-red-200 rounded-t-md border-gray-500  border-b p-2 font-semibold text-2xl">
        Error!
      </div>
      <div className="px-2 py-6 text-lg">{err_msg}</div>
      <div className="w-full p-2 border-gray-500 border-t">
        <button
          className="py-1 px-4 block ml-auto bg-blue-300/50 rounded"
          onClick={closeModal}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
