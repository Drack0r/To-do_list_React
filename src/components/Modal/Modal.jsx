import Button from "../Button/Button";

function Modal({ isOpen, onClose }) {
  /* ========== Return ========== */
  return (
    <>
      {isOpen && (
        <div
          className="overlay"
          onClick={(e) => {
            // Fermer la modale si l'user clique sur l'overlay
            if (e.target.classList.contains("overlay")) {
              onClose();
            }
          }}
        >
          <div className="modal">
            <Button className="close-button" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </Button>

            <form>
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

                <Button className="cancel-button" type="reset">
                  Annuler
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
