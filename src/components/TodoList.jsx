import React from "react";

const TodoList = React.memo(({ tasks, markAsDone }) => {
  return (
    <div className="todo-list">
      <h2>To-Do</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>
            <button onClick={() => markAsDone(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
