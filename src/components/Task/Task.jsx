import { useId } from "react";
import Button from "../Button/Button";

function Task({ children }) {
  /* ========== Logic ========== */
  const id = useId();

  /* ========== Return ========== */
  return (
    <article className="task">
      <input type="checkbox" className="task__checkbox" id={id} />

      <label className="task__label" htmlFor={id}>
        {children}
      </label>

      <Button className="delete-button">
        <i className="fa-solid fa-trash-can"></i>
      </Button>
    </article>
  );
}

export default Task;
