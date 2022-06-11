import React from 'react';
import './Task.css';

function Task({ task, toggleCheckbox, taskId, checked }) {

  function handleChange() {
    checked = !checked
  }

  function handleClick() {
    toggleCheckbox(taskId)
  }

  return (
    <li className="task">
      <input
        type="checkbox"
        className="task__checkbox"
        name={taskId}
        id={taskId}
        checked={checked}
        onChange={handleChange}
        onClick={handleClick}
      />
      <p className={`task__title ${checked ? "task__title_active" : ''}`}>{task}</p>
    </li>
  );
}

export default Task;
