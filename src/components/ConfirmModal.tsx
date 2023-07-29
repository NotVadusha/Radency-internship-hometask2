import Modal from "./Modal";
interface InputProps {
  message: string;
  isShown: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

function ConfirmModal({ message, isShown, onConfirm, onClose }: InputProps) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      <h1 className="text-2xl font-semibold my-2">Are you sure?</h1>
      <p className="my-2 text-xl">{message}</p>
      <div className="ml-auto">
        <button className="py-2 px-6 text-lg" onClick={onClose}>
          Close
        </button>
        <button
          className="py-2 px-6 text-lg bg-blue-200 rounded"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
