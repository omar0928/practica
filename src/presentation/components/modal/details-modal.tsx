import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1A1A1A",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "20px",
    maxWidth: "600px", // Ajuste el ancho máximo del modal
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "8px 15px",
    borderBottom: "1px solid #ddd",
  },
};

export const Details = ({ modalIsOpen, setIsOpen, project }) => {
  const [taskFormOpen, setTaskFormOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    colaborador: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    // Aquí puedes manejar la lógica para agregar la nueva tarea
    console.log("Nueva tarea:", newTask);
    // Aquí puedes reiniciar el formulario o cerrar el modal
    setNewTask({ name: "", colaborador: "" });
    setTaskFormOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Detalles del Proyecto"
    >
      <button
        onClick={closeModal}
        style={{
          color: "white",
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Cerrar
      </button>
      <h2 style={customStyles.title}>Detalles del Proyecto</h2>
      {project && (
        <div>
          <p>ID: {project.id}</p>
          <p>Nombre del Proyecto: {project.name}</p>
          <p>Descripción: {project.description}</p>
          <p>Estado: {project.status}</p>
          <p style={customStyles.sectionTitle}>Colaboradores:</p>
          <table style={customStyles.table}>
            <thead>
              <tr>
                <th style={customStyles.th}>Nombre de la Tarea</th>
                <th style={customStyles.th}>Descripción</th>
                <th style={customStyles.th}>Estado</th>
                <th style={customStyles.th}>Colaborador</th>
              </tr>
            </thead>
            <tbody>
              {project.tasks.map((task, index) => (
                <tr key={index}>
                  <td style={customStyles.td}>{task.name}</td>
                  <td style={customStyles.td}>{task.descripcion}</td>
                  <td style={customStyles.td}>{task.status}</td>
                  <td style={customStyles.td}>{task.colaborador}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => setTaskFormOpen(true)}
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "4px",
              marginTop: "20px",
            }}
          >
            Agregar Tarea
          </button>
        </div>
      )}
      <Modal
        isOpen={taskFormOpen}
        onRequestClose={() => setTaskFormOpen(false)}
        style={customStyles}
        contentLabel="Agregar Tarea"
      >
        <h2 style={customStyles.title}>Agregar Tarea</h2>
        <div>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Nombre de la Tarea:
          </label>
          <input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Colaborador:
          </label>
          <input
            type="text"
            name="colaborador"
            value={newTask.colaborador}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
          />
        </div>
        <button
          onClick={handleAddTask}
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Agregar
        </button>
      </Modal>
    </Modal>
  );
};
