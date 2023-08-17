import React from "react";

const CompletedList = React.memo(({ completedTasks, deleteTask }) => {
  return (
    <div className="completed-list">
      <h2>Completed</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index} className="completed-task">
            <span>{task.text}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index, true)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CompletedList;
