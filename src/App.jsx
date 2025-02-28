import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react"; // Import icons

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); // Clear input field
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>To-Do List</h2>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>
            <PlusCircle size={24} />
          </button>
        </div>
        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.listItem}>
              {t}
              <button
                onClick={() => removeTask(index)}
                style={styles.deleteButton}
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    margin: "0 0 15px",
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
  },
  input: {
    flex: "1",
    padding: "10px",
    border: "none",
    outline: "none",
    fontSize: "1em",
  },
  addButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    listStyle: "none",
    padding: "0",
    marginTop: "15px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "5px",
    background: "#f1f3f5",
    borderRadius: "5px",
  },
  deleteButton: {
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer",
  },
};

export default App;
