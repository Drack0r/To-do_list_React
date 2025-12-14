import { useState } from "react";
import { formatTaskName, getCurrentDate, verifyTaskName } from "./utils";
import { Button, Modal, TaskList } from "./components";

function App() {
  /* ========== States ========== */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Faire du sport",
      isDone: false,
    },
    {
      id: 2,
      name: "Regarder un film",
      isDone: false,
    },
    {
      id: 3,
      name: "Cuisiner un repas",
      isDone: false,
    },
  ]);

  /* ========== Handlers ========== */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Reset error & success
    setError(null);
    setSuccess(null);

    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    // Prevent page reloading
    e.preventDefault();

    // Reset error & success
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.target);
    const taskName = formData.get("taskName");

    // Verify task name validity
    const validation = verifyTaskName(taskName, tasks);

    // Setup error message
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    // Format task name
    const formatedTaskName = formatTaskName(taskName);

    const newTask = {
      id: Date.now(),
      name: formatedTaskName,
      isDone: false,
    };

    // Add task to tasklist
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Reset form
    e.target.reset();

    // Setup success message
    setSuccess(`"${formatedTaskName}" ajouté !`);

    // Close modal after a delay
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  /* ========== Logic ========== */
  const currentDate = getCurrentDate();

  /* ========== Return ========== */
  return (
    <>
      <h1 className="main-title">To-do list</h1>

      <p className="current-date">{currentDate}</p>

      <TaskList tasklist={tasks} />

      <Button className="add-button" onClick={handleOpenModal}>
        <i className="fa-solid fa-plus"></i>
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        error={error}
        success={success}
        onErrorClear={() => setError(null)}
      />
    </>
  );
}

export default App;
