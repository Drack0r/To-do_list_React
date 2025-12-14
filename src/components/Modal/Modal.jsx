import Button from "../Button/Button";

function Modal({ isOpen, onClose }) {
  /* ========== Return ========== */
  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <label className="modal__label" htmlFor="modalInput">
              Nom de la tâche :
            </label>

            <input
              type="text"
              className="modal__input"
              id="modalInput"
              autoFocus
            />

            <p className="message-ui">#</p>

            <div className="modal__actions">
              <Button className="add-button">Ajouter</Button>

              <Button className="cancel-button" onClick={onClose}>
                Annuler
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
