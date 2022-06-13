import './TodosList.css';
import Task from '../Task/Task';
import React from 'react';

function TodosList({ tasks, toggleCheckbox, tasksFiltered, buttonActiveAllTasks }) {
  const taskToRender = buttonActiveAllTasks ? tasks : tasksFiltered;

  return (
    <ul className="todos-list">
      {taskToRender.map((task) =>
        <Task
          task={task.task}
          key={task.id}
          toggleCheckbox={toggleCheckbox}
          taskId={task.id}
          checked={task.checked}
        />
      )}
    </ul>
  );
}

export default TodosList;
