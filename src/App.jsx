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

  const data = [
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
  ];

  /* ========== Return ========== */
  return (
    <>
      <h1 className="main-title">To-do list</h1>

      <p className="current-date">{currentDate}</p>

      <TaskList tasklist={data} />

      <Button className="add-button" onClick={handleOpenModal}>
        <i className="fa-solid fa-plus"></i>
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
