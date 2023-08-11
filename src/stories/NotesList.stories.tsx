import ErrorModal from "../components/ErrorModal";
export default {
  title: "ErrorModal",
  component: ErrorModal,
  argTypes: {
    onClose: { action: "handleClose" },
  },
};

interface inputArgs {
  err_msg: string;
  isShown: boolean;
  onClose: () => void;
}

const Template = (args: inputArgs) => (
  <ErrorModal
    err_msg={args.err_msg}
    isShown={args.isShown}
    onClose={args.onClose}
  />
);
export const Modal = Template.bind({});
