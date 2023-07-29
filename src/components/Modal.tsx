import React from "react";
interface InputProps {
  children: React.ReactNode;
  onClose: () => void;
  isShown: boolean;
}

const Modal: React.FC<InputProps> = ({ children, onClose, isShown }) => {
  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`stiky top-0 text-xs fixed bg-gray-600/[.2] w-full h-full grid place-items-center px-2 ${
        !isShown && "scale-0"
      }`}
      onClick={closeModalHandler}
    >
      <section
        className={`relative bg-slate-200 max-w-lg w-full rounded-lg p-5 flex flex-col justify-start transition-all ease duration-300 ${
          !isShown && "scale-0"
        }`}
      >
        {children}
      </section>
    </div>
  );
};

export default Modal;
