import data from "../../data/tasklist.json";
import Task from "../Task/Task";

function TaskList() {
  /* ========== Logic ========== */
  return (
    <div className="tasklist-container">
      <ul className="tasklist">
        {data.map((task) => (
          <li key={task.id} className="tasklist__item">
            <Task>{task.name}</Task>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
