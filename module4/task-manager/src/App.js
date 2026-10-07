import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="task-box">

        <h1>Task Manager</h1>

        <p className="subtitle">
          Manage Your Daily Tasks
        </p>

        <div className="input-area">

          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

        <div className="tasks">

          {tasks.length === 0 ? (
            <p className="no-task">
              No tasks yet
            </p>
          ) : (
            tasks.map((item, index) => (
              <div className="task-item" key={index}>

                <span>{item}</span>

                <button
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default App;