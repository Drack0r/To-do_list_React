import Task from "../Task/Task";

function TaskList({ tasklist }) {
  /* ========== Logic ========== */

  /* ========== Return ========== */
  return (
    <div className="tasklist-container">
      <ul className="tasklist">
        {tasklist.map((task) => (
          <li key={task.id} className="tasklist__item">
            <Task>{task.name}</Task>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
