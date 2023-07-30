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

export default ErrorModal;
