import Modal from "./Modal";
interface InputProps {
  err_msg: string;
  onClose: () => void;
  isShown: boolean;
}
function ErrorModal({ err_msg, onClose, isShown }: InputProps) {
  return (
    <>
      <Modal isShown={isShown} onClose={onClose}>
        <h1 className="text-2xl font-semibold my-2">An error occurred</h1>
        <p className="my-2 text-xl">{err_msg}</p>
        <button
          className="ml-auto text-lg py-2 px-6 bg-red-200 rounded"
          onClick={onClose}
        >
          Ok
        </button>
      </Modal>
    </>
  );
}
// <div
//   className="absolute scale-0 transition-transform w-96 inset-x-2/4 -translate-x-1/2 transform top-12 bg-white rounded-md shadow-xl shadow-gray-700/25"
//   id="errorModal"
// >
//   <div className="bg-red-200 rounded-t-md border-gray-500  border-b p-2 font-semibold text-2xl">
//     Error!
//   </div>
//   <div className="px-2 py-6 text-lg">{err_msg}</div>
//   <div className="w-full p-2 border-gray-500 border-t">
//     <button
//       className="py-1 px-4 block ml-auto bg-blue-300/50 rounded"
//       onClick={closeModal}
//     >
//       Ok
//     </button>
//   </div>
// </div>

export default ErrorModal;
