import ButtonPrimary from "../ButtomPrimary";

type Props = {
  message: string;
  onDialogClose: Function;
};

export default function DialogInfo({ message, onDialogClose }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
      <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
        <h2>{message}</h2>
        <div className="dsc-dialog-btn" onClick={() => onDialogClose()}>
          <ButtonPrimary text="Fechar" />
        </div>
      </div>
    </div>
  );
}