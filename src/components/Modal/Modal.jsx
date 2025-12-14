import { useEffect, useState } from "react";
import Button from "../Button/Button";

function Modal({ isOpen, error, success, onClose, onSubmit, onErrorClear }) {
  /* ========== States ========== */
  const [inputValue, setInputValue] = useState("");

  /* ========== Handlers ========== */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    // Reset error
    if (error && e.target.value.trim()) {
      onErrorClear();
    }
  };

  const handleCancel = () => {
    setInputValue("");
  };

  /* ========== Side effects ========== */
  // Close modal with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

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

            <form onSubmit={onSubmit}>
              <label className="modal__label" htmlFor="modalInput">
                Nom de la tâche :
              </label>

              <input
                type="text"
                name="taskName"
                value={inputValue}
                onChange={handleInputChange}
                className="modal__input"
                id="modalInput"
                autoFocus
                maxLength="30"
                placeholder="Ex: Boire de l'eau"
              />

              <p
                className={`message-ui ${error ? "message-ui--error" : ""} ${
                  success ? "message-ui--success" : ""
                }`.trim()}
              >
                {error} {success}
              </p>

              <div className="modal__actions">
                <Button
                  className="add-button"
                  type="submit"
                  disabled={!inputValue.trim()}
                >
                  Ajouter
                </Button>

                <Button className="cancel-button" onClick={handleCancel}>
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
