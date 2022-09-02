
export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <p className="abs" type="button" onClick={handleClose}>
          Close
        </p>
      </section>
    </div>
  );
};