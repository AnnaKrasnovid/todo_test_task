import React from 'react';
import './Task.css';

function Task({ task, onChangeCheckbox, id, checked }) {

  function handleChangeCheckbox() {
    onChangeCheckbox(id);
  }

  return (
    <li className="task">
      <input
        type="checkbox"
        className="task__checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={handleChangeCheckbox}
      />
      <p className={`task__title ${checked ? 'task__title_active' : ''}`}>{task}</p>
    </li>
  );
}

export default Task;
