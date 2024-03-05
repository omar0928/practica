import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Details = ({ modalIsOpen, setIsOpen, project }) => {
  console.log(project);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <h2>Detalles del Proyecto</h2>
        {project && (
          <div>
            <p>ID: {project.id}</p>
            <p>Nombre del Proyecto: {project.name}</p>
            <p>Descripción: {project.description}</p>
            <p>Estado: {project.status}</p>
            <p>Colaboradores:</p>
            <ul>
              {project.tasks.map((task, index) => (
                <li key={index}>
                  <p>Nombre de la tarea: {task.name}</p>
                  <p>Descripción: {task.descripcion}</p>
                  <p>Estado: {task.status}</p>
                  <p>Colaborador: {task.colaborador}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};
