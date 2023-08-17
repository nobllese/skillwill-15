import React, { useState, useCallback } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = useCallback((text) => {
    setTasks((prevTasks) => [...prevTasks, { text }]);
  }, []);

  const markAsDone = useCallback(
    (index) => {
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        tasks[index],
      ]);
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    },
    [tasks]
  );

  const deleteTask = useCallback((index, isCompletedList) => {
    if (isCompletedList) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((_, i) => i !== index)
      );
    } else {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <div className="lists">
        <TodoList tasks={tasks} markAsDone={markAsDone} />
        <CompletedList
          completedTasks={completedTasks}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
