import { useState } from "react";
import { getCurrentDate } from "./utils";
import { Button, Modal, TaskList } from "./components";

function App() {
  /* ========== States ========== */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ========== Handlers ========== */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /* ========== Logic ========== */
  const currentDate = getCurrentDate();

  /* ========== Return ========== */
  return (
    <>
      <h1 className="main-title">To-do list</h1>

      <p className="current-date">{currentDate}</p>

      <TaskList />

      <Button className="add-button" onClick={handleOpenModal}>
        <i className="fa-solid fa-plus"></i>
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
