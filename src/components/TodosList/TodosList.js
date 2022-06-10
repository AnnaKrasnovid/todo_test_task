import './TodosList.css';
import Task from '../Task/Task';
import React from 'react';

function TodosList({ tasks }) {


  return (
    <ul className="todos-list">
      {tasks ? tasks.map((task) => <Task task={task.task} key={task.id} />) : ''}
    </ul>
  );
}

export default TodosList;
